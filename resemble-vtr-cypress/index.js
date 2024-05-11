const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');


// Función para ejecutar las pruebas de Cypress

function runCypressTests() {
  return new Promise((resolve, reject) => {
    const cypressProcess = spawn('npx', ['cypress', 'run']);

    cypressProcess.stdout.on('data', (data) => {
      console.log(`Cypress: ${data.toString().trim()}`);
    });

    cypressProcess.stderr.on('data', (data) => {
      console.error(`Error de Cypress: ${data.toString().trim()}`);
    });

    cypressProcess.on('close', (code) => {
      if (code === 0) {
        console.log('Cypress ejecutado exitosamente.');
        resolve();
      } else {
        const errorMessage = `Error al ejecutar Cypress. Código de salida: ${code}`;
        console.error(errorMessage);
        reject(new Error(errorMessage));
      }
    });
  });
}

const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest(){
  let resultInfo = {
  }
  console.log("Running cypress test")
  await runCypressTests()
  .then((stdout) => {
    console.log('Ejecución exitosa de Cypress:', stdout);
  })
  .catch((error) => {
    // La ejecución de Cypress falló
    console.error('Error al ejecutar las pruebas de Cypress:', error);
    // Aquí puedes manejar el error según sea necesario
  });

  let datetime = new Date().toISOString().replace(/:/g,".");

  let directoryPath = './cypress/screenshots';
  const fileMap = buildFileMap(directoryPath);
  let resultFies = []
  for (const [name, files] of Object.entries(fileMap)) {
    let package = []
    package.push(files[0])
    package.push(files[1])
    const data = await compareImages(
      fs.readFileSync(files[0].toString()),
      fs.readFileSync(files[1].toString()),
      options
    );
    let compareFile = `ss_${name}_compare.png`
    fs.writeFileSync(`./results/${compareFile}`, data.getBuffer());
    package.push(compareFile)
    resultFies.push(package)
  }
  let reportFilenName = `./results/report.html`
  fs.writeFileSync(`./results/report.html`, createReport(datetime, resultFies));
  fs.copyFileSync('./index.css', `./results/index.css`);
  resultInfo['report'] =  reportFilenName
  console.log('------------------------------------------------------------------------------------')
  console.log("Execution finished. Check the report under the results folder")
  return resultInfo;  
}


function buildFileMap(directoryPath, fileMap = {}) {

  const items = fs.readdirSync(directoryPath);

  items.forEach((item) => {
    const itemPath = path.join(directoryPath, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      buildFileMap(itemPath, fileMap);
    } else if (stats.isFile()) {
      const fileName = path.basename(item);
      if (!fileMap[fileName]) {
        fileMap[fileName] = [];
      }
      fileMap[fileName].push(itemPath);
    }
  });

  return fileMap;
}


function browser(file, step){
  return `<div class=" browser" id="test0">
  <div class=" btitle">
      <h2>Step: ${step+1}</h2>
  </div>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Reference</span>
      <img class="img2" src="../${file[0]}" id="refImage" label="Reference">
    </div>
    <div class="imgcontainer">
      <span class="imgname">Test</span>
      <img class="img2" src="../${file[1]}" id="testImage" label="Test">
    </div>
  </div>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Diff</span>
      <img class="imgfull" src="${file[2]}" id="diffImage" label="Diff">
    </div>
  </div>
</div>`
}

function createReport(datetime, files){
  return `
  <html>
      <head>
          <title> VRT Report </title>
          <link href="index.css" type="text/css" rel="stylesheet">
      </head>
      <body>
          <h1>Report for 
          </h1>
          <p>Executed: ${datetime}</p>
          <div id="visualizer">
            ${files.map((p, index)=>browser(p, index))}
          </div>
      </body>
  </html>`
}


(async ()=>console.log(await executeTest()))();