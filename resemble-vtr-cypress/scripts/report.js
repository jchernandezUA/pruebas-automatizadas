const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');
const config = require("../config.json");
const { viewportHeight, viewportWidth, browsers, options } = config;



async function getReport() {
  let datetime = new Date().toISOString().replace(/:/g,".");
  let directoryPath = './cypress/screenshots';
  const fileMap = buildFileMap(directoryPath);
  let resultFies = []
  for (const [name, files] of Object.entries(fileMap)) {
    let package = []
    if (files.length == 2) {
      for (let i = 0; i < files.length; i++) {
        await copyFiles(name, files[i], i)
        package.push(`v${i}/${name}`)
      }
    }

    const data = await compareImages(
      fs.readFileSync(files[0].toString()),
      fs.readFileSync(files[1].toString()),
      options
    );
    let compareFile = `${name}_compare.png`
    fs.writeFileSync(`./results/${compareFile}`, data.getBuffer());
    package.push(compareFile)
    console.log(package)
    resultFies.push(package)
  }
  let reportFilenName = `./results/report.html`
  fs.writeFileSync(`./results/report.html`, createReport(datetime, resultFies));
  fs.copyFileSync('./index.css', `./results/index.css`);
  return createReport(datetime, resultFies)
}

async function copyFiles(name, originalFile, position) {
  let dirPath = `./results/v${position}`
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
  
  
  function browser(file){
    return `<div class=" browser" id="test0">
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="${file[0]}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="${file[1]}" id="testImage" label="Test">
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
            <h1>Report 
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
              ${files.map((p)=>browser(p))}
            </div>
        </body>
    </html>`
  }

module.exports = {
    getReport
}