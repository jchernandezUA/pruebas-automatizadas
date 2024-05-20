const utils = require('../support/utils')
const {When, Then} = require('@cucumber/cucumber');
const AddMenuPageObject = require('../support/AddMenuPageObject');
const DashboardPageObject = require('../support/DashboardPageObject');

let TEMP_NEW_ITEM = '';

When('I click the settings icon', async function () {
  let dashboardPO = new DashboardPageObject(this.driver)
  await dashboardPO.clickSettingsIcon();
})

When('I click the Navigation Customize button', async function () {
  let addMenuPO = new AddMenuPageObject(this.driver)
  await addMenuPO.clickNavigationCustomizeButton();
});

When('I enter New item {kraken-string}', async function (label) {
  let addMenuPO = new AddMenuPageObject(this.driver)
  await addMenuPO.enterNewLabel(label);
});

When('I click the Navigation Customize button OK button', async function () {
  let addMenuPO = new AddMenuPageObject(this.driver)
  await addMenuPO.clickNavigationCustomizeOkButton();
});

Then('I go to admin page', async function() {
  let dashboardPO = new DashboardPageObject(this.driver)
  await dashboardPO.goToAdminPage();
});

Then('I see item menu {kraken-string}', async function (expectedText) {
  let addMenuPO = new AddMenuPageObject(this.driver)
  await addMenuPO.seeTheNewItemMenu(expectedText);
});

Then('I go to the homepage', async function() {
  let dashboardPO = new DashboardPageObject(this.driver)
  await dashboardPO.goToHomepage();
});

Then('I delete item menu', async function () {
  let addMenuPO = new AddMenuPageObject(this.driver)
  await addMenuPO.deleteItemMenu();
});

When('I enter New item with request value', async function () {
  let addMenuPO = new AddMenuPageObject(this.driver)
  let newItemArray = await utils.getDataJson('https://my.api.mockaroo.com/new_item.json?key=6d151b10')
  const randomNumber = Math.floor(Math.random() * newItemArray.length);
  TEMP_NEW_ITEM = newItemArray[randomNumber]['label']
  await addMenuPO.enterNewLabel(TEMP_NEW_ITEM);
})

Then('I verify my new item menu is there', async function() {
  const expect = (await import('expect-webdriverio')).expect;
  let label = await this.driver.$('/html/body/div[1]/header/div/nav/ul/li[3]/a');
  await expect(label).toBeDisplayed();
  await expect(label).toHaveText(TEMP_NEW_ITEM);
})
