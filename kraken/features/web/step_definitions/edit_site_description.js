const utils = require('../support/utils')
const {When, Then } = require("@cucumber/cucumber");
const EditSiteDescPageObject = require("../support/EditSiteDescPageObject");

let TEMP_DESC = '';

When('I click the Title and Description button', async function () {
  let editSitePO = new EditSiteDescPageObject(this.driver);
  await editSitePO.clickDescButton();
});

When('I edit the site description to {kraken-string}', async function(label) {
  let editSitePO = new EditSiteDescPageObject(this.driver);
  await editSitePO.editDescription(label);
});

When('I save the site description', async function() {
  let editSitePO = new EditSiteDescPageObject(this.driver);
  await editSitePO.clickSaveDescButton();
});

Then('I see description contains {kraken-string}', async function(label) {
  const expect = (await import('expect-webdriverio')).expect;
  let desc = await this.driver.$('/html/body/div[1]/section[1]/div/h1');
  await expect(desc).toBeDisplayed();
  await expect(desc).toHaveText(await expect.stringContaining(label));
});

When('I edit the site description with request value', async function () {
  let editSitePO = new EditSiteDescPageObject(this.driver);
  let descriptionArray = await utils.getDataJson('https://my.api.mockaroo.com/description.json?key=6d151b10')
  const randomNumber = Math.floor(Math.random() * descriptionArray.length);
  TEMP_DESC = descriptionArray[randomNumber]['description']
  await editSitePO.editDescription(TEMP_DESC);
})

Then('I verify my description changes', async function() {
  const expect = (await import('expect-webdriverio')).expect;
  let desc = await this.driver.$('/html/body/div[1]/section[1]/div/h1');
  await expect(desc).toBeDisplayed();
  await expect(desc).toHaveText(await expect.stringContaining(TEMP_DESC));
})
