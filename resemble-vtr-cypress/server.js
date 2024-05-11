const express = require('express');
const path = require('path');
const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const { spawn } = require('child_process');
const cypress = require('./scripts/cypress')
const report = require('./scripts/report')

const app = express();
const port = 3001;


app.use(express.static(path.join(__dirname, 'vtr-results')));

app.get('/', async (req, res) => {
    const filePath = path.join(__dirname, '/html/', 'home.html');
    res.sendFile(filePath);
})

app.get('/fire-cypress', async (req, res) => {

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 'no-cache');
    await cypress.runCypressTests(res)
    .then((stdout) => {
      console.log('Ejecución exitosa de Cypress:', stdout);
      res.write(`
        ******** 
            Finalizado ver el reporte en /report
        ********
        `)
        res.write(`<script>window.location='/report';</script>`)
        res.end()
    })
    .catch((error) => {
      let err = 'Error al ejecutar las pruebas de Cypress: ' + error
      console.error(err);
      res.write(err)
      res.write(`<script>window.location='/report';</script>`)
      res.end()
    });
});

app.get('/report', (req, res) => {
  report.getReport(res);
});

app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en http://localhost:${port}`);
});