const {AfterStep} = require('@cucumber/cucumber');
let stepCounter = {};

AfterStep(async function ({gherkinDocument}) {
  const featureName = gherkinDocument.feature.name.replace(/\s+/g, '_').toLowerCase();
  stepCounter[featureName] = (stepCounter[featureName] || 0) + 1;

  await this.driver.waitUntil(async () => {
    return await this.driver.execute(() => {
      return document.readyState === 'complete';
    });
  });

  await this.driver.saveScreenshot(`./screenshots/ss_${featureName}_${stepCounter[featureName]}.png`);
});
