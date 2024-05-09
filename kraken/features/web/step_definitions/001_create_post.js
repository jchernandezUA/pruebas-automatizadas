const { Given, When, Then } = require("@cucumber/cucumber");

When("I enter post title {string} {string} {string}", async function (title, scenario, step) {
  let element = await this.driver.$(".gh-editor-title");
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
  return await element.setValue(title);
});

When("I enter post descripcion {string} {string} {string}", async function (desc, scenario, step) {
  let element = await this.driver.$(".kg-prose");
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
  return await element.setValue(desc);
});


When("I click post {string} {string}", async function (scenario, step) {
  const publishButtonSelector = ".gh-publish-trigger";
  const element = await this.driver.$(publishButtonSelector);
  await element.waitForDisplayed({ timeout: 5000 });
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`);  
  await element.click();
});


Then("I should see post title as {string} {string} {string}", async function (title,scenario, step) {
    let element = await this.driver.$(".gh-editor-title");
    let value = await element.getValue();
    await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_04.png`)
    if (value !== title) {
        throw new Error(`Expected post title to be ${title} but got ${value}`);
    }
});

Then("I should see post description as {string}", async function (desc) {
    let element = await this.driver.$(".kg-prose");
    let value = await element.getText();
    if (value !== desc) {
        throw new Error(`Expected post description to be ${desc} but got ${value}`);
    }
});
