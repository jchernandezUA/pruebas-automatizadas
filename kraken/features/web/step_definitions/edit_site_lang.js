const {When, Then } = require("@cucumber/cucumber");
const EditSiteLangPageObject = require("../support/EditSiteLangPageObject");

When('I click the Site language button', async function () {
  let editSitePO = new EditSiteLangPageObject(this.driver);
  await editSitePO.clickLangButton();
});

When('I edit the site language to {string}', async function(label) {
  let editSitePO = new EditSiteLangPageObject(this.driver);
  await editSitePO.editLanguage(label);
});

When('I save the site language', async function() {
  let editSitePO = new EditSiteLangPageObject(this.driver);
  await editSitePO.clickSaveLangButton();
});

Then('I see site language is {string}', async function(label) {
  const expect = (await import('expect-webdriverio')).expect;
  let site = await this.driver.$('/html');
  await expect(site).toExist();
  await expect(site).toHaveAttribute('lang', label);
});