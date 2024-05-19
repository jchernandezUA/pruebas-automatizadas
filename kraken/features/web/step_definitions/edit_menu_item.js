const utils = require('../support/utils')
const {Given, When, Then} = require('@cucumber/cucumber');
const AddMenuPageObject = require('../support/AddMenuPageObject');
const EditItemPageObject = require('../support/EditItemPageObject');
const DashboardPageObject = require('../support/DashboardPageObject');

let TEMP_EDITED_ITEM = '';

Given('I add menu item {kraken-string}', async function(label) {
  let dashboardPO = new DashboardPageObject(this.driver)
  let addMenuPO = new AddMenuPageObject(this.driver)
  await dashboardPO.clickSettingsIcon();
  await addMenuPO.clickNavigationCustomizeButton();
  await addMenuPO.enterNewLabel(label);
  await addMenuPO.clickNavigationCustomizeOkButton();
  await addMenuPO.clickNavigationCustomizeButton();
})

When('I edit the last item to {kraken-string}', async function(label) {
  let addMenuPO = new AddMenuPageObject(this.driver)
  let editMenuPO = new EditItemPageObject(this.driver)
  await editMenuPO.UpdateLabel(label);
  await addMenuPO.clickNavigationCustomizeOkButton();
});

Given('I add menu item with request value', async function() {
  let dashboardPO = new DashboardPageObject(this.driver)
  let addMenuPO = new AddMenuPageObject(this.driver)

  let newItemArray = await utils.getDataJson('https://my.api.mockaroo.com/new_item.json?key=6d151b10')
  const randomNumber = Math.floor(Math.random() * newItemArray.length);
  let label = newItemArray[randomNumber]['label']

  await dashboardPO.clickSettingsIcon();
  await addMenuPO.clickNavigationCustomizeButton();
  await addMenuPO.enterNewLabel(label);
  await addMenuPO.clickNavigationCustomizeOkButton();
  await addMenuPO.clickNavigationCustomizeButton();
})

When('I edit the last item with request value', async function() {
  let addMenuPO = new AddMenuPageObject(this.driver)
  let editMenuPO = new EditItemPageObject(this.driver)

  let newItemArray = await utils.getDataJson('https://my.api.mockaroo.com/new_item.json?key=6d151b10')
  const randomNumber = Math.floor(Math.random() * newItemArray.length);
  TEMP_EDITED_ITEM = newItemArray[randomNumber]['label']

  await editMenuPO.UpdateLabel(TEMP_EDITED_ITEM);
  await addMenuPO.clickNavigationCustomizeOkButton();
});

Then('I verify my edited item menu is there', async function() {
  const expect = (await import('expect-webdriverio')).expect;
  let label = await this.driver.$('/html/body/div[1]/header/div/nav/ul/li[3]/a');
  await expect(label).toBeDisplayed();
  await expect(label).toHaveText(TEMP_EDITED_ITEM);
})
