const {When, Then} = require('@cucumber/cucumber');
const AddMenuPageObject = require('../support/AddMenuPageObject');

When('I click the settings icon', async function () {
  let addMenuPO = new AddMenuPageObject(this.driver)
  await addMenuPO.clickSettingsIcon();
})

When('I click the Navigation Customize button', async function () {
  let addMenuPO = new AddMenuPageObject(this.driver)
  await addMenuPO.clickNavigationCustomizeButton();
});

When('I enter New item {string}', async function (label) {
  let addMenuPO = new AddMenuPageObject(this.driver)
  await addMenuPO.enterNewLabel(label);
});

When('I click the New Navigation Customize button OK button', async function () {
  let addMenuPO = new AddMenuPageObject(this.driver)
  await addMenuPO.clickNewNavigationCustomizeOkButton();
});

Then('I go to admin page', async function() {
  let addMenuPO = new AddMenuPageObject(this.driver)
  await addMenuPO.goToAdminPage();
});

Then('I see the new item menu {string}', async function (expectedText) {
  let addMenuPO = new AddMenuPageObject(this.driver)
  await addMenuPO.seeTheNewItemMenu(expectedText);
});

Then('I go to the homepage', async function() {
  let addMenuPO = new AddMenuPageObject(this.driver)
  await addMenuPO.goToHomepage();
});

Then('I delete item menu', async function () {
  let addMenuPO = new AddMenuPageObject(this.driver)
  await addMenuPO.deleteItemMenu();
});
