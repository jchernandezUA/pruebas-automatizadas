const {When, Then } = require("@cucumber/cucumber");
const SitePrivatePageObject = require("../support/SitePrivatePageObject");

When('I click the site private button', async function () {
  let editPrivatePO = new SitePrivatePageObject(this.driver);
  await editPrivatePO.clickSitePrivateButton();
});

When('I switch the site private', async function() {
  let editPrivatePO = new SitePrivatePageObject(this.driver);
  await editPrivatePO.switchPrivate();
});

When('I set the private password to {string}', async function(label) {
  let editPrivatePO = new SitePrivatePageObject(this.driver);
  await editPrivatePO.setPrivatePassword(label);
});

When('I click Save private setting button', async function() {
  let editPrivatePO = new SitePrivatePageObject(this.driver);
  await editPrivatePO.clickSavePrivateButton();
});

Then('I see the text {string}', async function(label) {
  const expect = (await import('expect-webdriverio')).expect;
  let desc = await this.driver.$('/html/body/div/div/main/div/div/section/header/h1');
  await expect(desc).toExist();
  await expect(desc).toBeDisplayed();
  await expect(desc).toHaveText(await expect.stringContaining(label));
});