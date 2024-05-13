const { Then } = require('@cucumber/cucumber');

Then('I take a screenshot {string} {string}', async function (scenario, step) {
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}.png`)
});
