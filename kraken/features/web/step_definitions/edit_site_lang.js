const utils = require('../support/utils')
const {When, Then } = require("@cucumber/cucumber");
const EditSiteLangPageObject = require("../support/EditSiteLangPageObject");

When('I click the Site language button', async function () {
  let editSitePO = new EditSiteLangPageObject(this.driver);
  await editSitePO.clickLangButton();
});

When('I edit the site lang to {kraken-string}', async function(label) {
  let editSitePO = new EditSiteLangPageObject(this.driver);
  await editSitePO.editLanguage(label);
});

When('I edit the site language to {string}', async function(label) {
  let editSitePO = new EditSiteLangPageObject(this.driver);
  await editSitePO.editLanguage(label);
});

When('I save the site language', async function() {
  let editSitePO = new EditSiteLangPageObject(this.driver);
  await editSitePO.clickSaveLangButton();
});

Then('I see site language is {kraken-string}', async function(label) {
  const expect = (await import('expect-webdriverio')).expect;
  let site = await this.driver.$('/html');
  await expect(site).toExist();
  await expect(site).toHaveAttribute('lang', label);
});

When('I edit the site language with request value', async function() {
  let editSitePO = new EditSiteLangPageObject(this.driver);
  let langArray = await utils.getDataJson('https://my.api.mockaroo.com/lang.json?key=6d151b10')
  const randomNumber = Math.floor(Math.random() * langArray.length);
  await editSitePO.editLanguage(langArray[randomNumber]['lang']);
});

Then('I see site language match ISO 639-1', async function() {
  const expect = (await import('expect-webdriverio')).expect;
  const langCodePattern = /^[a-z]{2}$/;

  let site = await this.driver.$('/html');
  await expect(site).toExist();

  const langAttribute = await site.getAttribute('lang');
  await expect(langAttribute).toMatch(langCodePattern);
});

Then('I validate language saving error', async function () {
  const expect = (await import('expect-webdriverio')).expect;
  let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[3]/div[3]/div/div');
  const text = await element.getText();
  await expect(text).toContain('en');
});
