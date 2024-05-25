const express = require('express');
const path = require('path');
const compareImages = require("resemblejs/compareImages")
const report = require('./scripts/report')
const fs = require('fs');

const app = express();
const port = 3001;


app.use(express.static(path.join(__dirname, 'vtr-results')));

app.get('/', async (req, res) => {

    groupFiles((result) => {
        console.log(JSON.stringify(result, null, 2))
        report.buildReportBrowsers(result, res)
    })
})

app.listen(port, () => {
    console.log(`Servidor Express en funcionamiento en http://localhost:${port}`);
});


function groupFiles(callback) {
    const screenshotsDir = './vtr-results/screenshots';
    fs.readdir(screenshotsDir, (err, files) => {
        if (err) {
            console.error('Error leyendo el directorio:', err);
            return;
        }

        const screenshotFiles = files.filter(file => file.startsWith('ss_') && file.endsWith('.png'));
        const featureGroups = {};

        screenshotFiles.forEach(file => {
            const match = file.match(/^ss_(.+)_(.+)\.png$/);
            if (match) {
            const featureName = match[1];

            if (!featureGroups[featureName]) {
                featureGroups[featureName] = [];
            }

            featureGroups[featureName].push('screenshots/'+file);
            }
        });

        const result = Object.keys(featureGroups).map(featureName => ({
            name: featureName,
            files: featureGroups[featureName]
        }));

        callback(result)
    });

}