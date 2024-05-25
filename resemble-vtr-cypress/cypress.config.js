const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: '../cypress/cypress/e2e/5.79.6/*.{js,jsx,ts,tsx}',
    supportFile: '../cypress/cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    setupNodeEvents(on, config) {
      on('after:screenshot', (details) => {
        const path = require('path');
        const newPath = path.join('cypress/screenshots', path.basename(details.path));

        return new Promise((resolve, reject) => {
          // Renombrar el archivo de screenshot
          require('fs').rename(details.path, newPath, (err) => {
            if (err) return reject(err);
            resolve({ path: newPath });
          });
        });
      });
    },
    experimentalWebKitSupport: true,
    screenshotsFolder: 'cypress/screenshots'
  },
});
