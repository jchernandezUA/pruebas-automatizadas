const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

function runCypressTests() {
  return new Promise((resolve, reject) => {
    const cypressProcess = spawn('npx', ['cypress', 'run', '../cypress'], { shell: true });

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

const generateBackstopScenarios = (type) => {
  const referenceDir = path.join(__dirname, 'cypress', 'screenshots', 'ghost5');
  if (type === 1) {
    var testDir = path.join(__dirname, 'cypress', 'screenshots', 'ghost3' );
  } else {
    var testDir = path.join(__dirname, 'cypress', 'screenshots', 'ghost5');
  }
  const scenarios = [];

  try {
    const referenceFiles = fs.readdirSync(referenceDir);
    console.log(referenceFiles)
    const testFiles = fs.readdirSync(testDir);
    console.log(testFiles)

    referenceFiles.forEach(file => {
      const referencePath = path.join(referenceDir, file);
      const testPath = path.join(testDir, file);

      if (testFiles.includes(file)) {
        scenarios.push({
          label: file,
          url: `file://${testPath.replace(/\\/g, '/')}`,
          referenceUrl: `file://${referencePath.replace(/\\/g, '/')}`,
          readyEvent: "",
          readySelector: "",
          delay: 0,
          hideSelectors: [],
          removeSelectors: [],
          hoverSelector: "",
          clickSelector: "",
          postInteractionWait: 0,
          selectors: ["document"],
          selectorExpansion: true,
          expect: 0,
          misMatchThreshold: 0.1,
          requireSameDimensions: true
        });
      }
    });

  } catch (error) {
    console.error(`Error generando escenarios: ${error.message}`);
  }

  return scenarios;
};

// Función para actualizar la configuración de Backstop
const updateBackstopConfig = (scenarios) => {
  const backstopConfigPath = path.join(__dirname, 'backstop.json');
  let backstopConfig;

  try {
    backstopConfig = require(backstopConfigPath);
    backstopConfig.scenarios = scenarios;

    fs.writeFileSync(backstopConfigPath, JSON.stringify(backstopConfig, null, 2));
    console.log('Backstop configuration updated.');
  } catch (error) {
    console.error(`Error actualizando backstop.json: ${error.message}`);
  }
};

// Función para ejecutar un comando y devolver una promesa
const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error ejecutando ${command}: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.error(`Error: ${stderr}`);
      }
      console.log(`Resultado de ${command}:\n${stdout}`);
      resolve(stdout);
    });
  });
};

async function createRef() {

  console.log('Cypress test ');
  await runCypressTests();
  console.log('generación de backstop');
  const scenarios = generateBackstopScenarios(1);
  console.log('Ejecutando backstop test...');
  updateBackstopConfig(scenarios);
  console.log('Ejecutando backstop test...');
  await runCommand('npx backstop test')
    .catch((error) => console.error(`Falló backstop test: ${error.message}`));
  console.log('Backstop test completado. Ejecutando backstop approve...');
  await runCommand('npx backstop approve')
    .catch((error) => console.error(`Falló backstop approve: ${error.message}`));
}

async function comparate() {
  const scenarios = generateBackstopScenarios(2);
  updateBackstopConfig(scenarios);
  console.log('Backstop approve completado. Ejecutando backstop test nuevamente...');
  await runCommand('npx backstop test')
    .catch((error) => console.error(`Falló backstop test: ${error.message}`));
  console.log('Backstop test final completado.');
}

// Función principal
const main = async () => {
  try {
    await createRef()
    await comparate()
  } catch (error) {
    console.error(`Error en la ejecución: ${error.message}`);
  }
};

main();
