const {When, Then } = require("@cucumber/cucumber");
const EditSiteDescPageObject = require("../support/EditSiteDescPageObject");

When('I click the Title and Description button', async function () {
  let editSitePO = new EditSiteDescPageObject(this.driver);
  await editSitePO.clickDescButton();
});

When('I edit the site description to {string}', async function(label) {
  let editSitePO = new EditSiteDescPageObject(this.driver);
  await editSitePO.editDescription(label);
});

When('I save the site description', async function() {
  let editSitePO = new EditSiteDescPageObject(this.driver);
  await editSitePO.clickSaveDescButton();
});

Then('I see description contains {string}', async function(label) {
  const expect = (await import('expect-webdriverio')).expect;
  let desc = await this.driver.$('/html/body/div[1]/section[1]/div/h1');
  await expect(desc).toBeDisplayed();
  await expect(desc).toHaveText(await expect.stringContaining(label));
});