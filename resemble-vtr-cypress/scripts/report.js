const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');
const config = require("../config.json");
const { viewportHeight, viewportWidth, browsers, options } = config;



async function getReport(res) {
  await createResultsDir()
  let datetime = new Date().toISOString().replace(/:/g,".");
  let directoryPath = './cypress/screenshots';
  const fileMap = buildFileMap(directoryPath);
  let resultFies = []
  for (const [name, files] of Object.entries(fileMap)) {
    let package = {}
    let fileName = name.replace('ss_','')
    package["name"] = name.replace('.png','')
    package["files"] = []
    if (files.length == 2) {
      for (let i = 0; i < files.length; i++) {
        await copyFiles(fileName, files[i], i)
        package["files"].push(`v${i}/${fileName}`)
      }
      const data = await compareImages(
        fs.readFileSync(files[0].toString()),
        fs.readFileSync(files[1].toString()),
        options
      );
      let compareFile = `${fileName}_compare.png`
      fs.writeFileSync(`./vtr-results/${compareFile}`, data.getBuffer());
      package["files"].push(compareFile)
      console.log(package)
      resultFies.push(package)
    }
  }
  let reportFilenName = `./vtr-results/report.html`
  fs.writeFileSync(`./vtr-results/report.html`, createReport(datetime, resultFies));
  fs.copyFileSync('./index.css', `./vtr-results/index.css`);
  const report = await createReport(datetime, resultFies)
  res.send(report)
}


async function buildReportBrowsers(resultFies, res) {
  let datetime = new Date().toISOString().replace(/:/g,".");
  

  for (let i = 0; i < resultFies.length; i++) {
    let files = resultFies[i]["files"]
    let name = resultFies[i]["name"]

   if (files.length == 2) {
    const data = await compareImages(
      fs.readFileSync('./vtr-results/'+files[0].toString()),
      fs.readFileSync('./vtr-results/'+files[1].toString()),
      options
    );
    let compareFile = `screenshots/xx_${name}_compare.png`
    fs.writeFileSync(`./vtr-results/${compareFile}`, data.getBuffer());
    resultFies[i]["files"].push(compareFile)
   }
  }

  fs.writeFileSync(`./vtr-results/report.html`, createReport(datetime, resultFies));
  fs.copyFileSync('./index.css', `./vtr-results/index.css`);
  const report = await createReport(datetime, resultFies)
  res.send(report)
}


async function createResultsDir() {
  const directoryPath = 'vtr-results'
  if (!fs.existsSync(directoryPath)) {
    // If it doesn't exist, create the directory
    fs.mkdirSync(directoryPath);
  
    console.log(`Directory '${directoryPath}' created.`);
  } else {
    console.log(`Directory '${directoryPath}' already exists.`);
  }
}

async function copyFiles(name, originalFile, position) {
  let dirPath = `./vtr-results/v${position}`
  let copyFile = `${dirPath}/${name}`
  if (!fs.existsSync(dirPath)) {
    fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) {
            console.error('Error al crear la carpeta:', err);
        } else {
            console.log('Carpeta creada exitosamente:', dirPath);
        }
    });
  }
  fs.readFile(originalFile, (err, data) => {
    if (err) {
      console.error('Error al leer la imagen de origen:', err);
      return;
    }
    fs.writeFile(copyFile, data, (err) => {
        if (err) {
          console.error('Error al escribir la imagen de destino:', err);
          return;
        }
        console.log('Imagen copiada con éxito.', copyFile);
    })
  })
  return copyFile
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
  
  
  function packages(package){
    return `<div class=" browser" id="test0">
    <h2>Screen: ${package["name"].replace('ss_','')}</h2>

    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="${package["files"][1]}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="${package["files"][0]}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="${package["files"][2]}" id="diffImage" label="Diff">
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
            <h1>Report 
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
              ${files.map((p)=>packages(p))}
            </div>
        </body>
    </html>`
  }

module.exports = {
    getReport,
    buildReportBrowsers
}