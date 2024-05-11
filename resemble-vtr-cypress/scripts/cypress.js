const { spawn } = require('child_process');

function runCypressTests(res) {
    return new Promise((resolve, reject) => {
        
        const cypressProcess = spawn('npx', ['cypress', 'run', '../cypress']);

        cypressProcess.stdout.on('data', (data) => {
            res.write(`data: ${data.toString().trim()}\n\n`);
            res.write('<br>');
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

module.exports = {
    runCypressTests
};