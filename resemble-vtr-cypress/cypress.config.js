const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: '../cypress/cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: '../cypress/cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
