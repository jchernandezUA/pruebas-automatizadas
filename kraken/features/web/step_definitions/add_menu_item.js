const {When, Then} = require('@cucumber/cucumber');
const AddMenuPageObject = require('../support/AddMenuPageObject');
const DashboardPageObject = require('../support/DashboardPageObject');

When('I click the settings icon', async function () {
  let dashboardPO = new DashboardPageObject(this.driver)
  await dashboardPO.clickSettingsIcon();
})

When('I click the Navigation Customize button', async function () {
  let addMenuPO = new AddMenuPageObject(this.driver)
  await addMenuPO.clickNavigationCustomizeButton();
});

When('I enter New item {string}', async function (label) {
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

Then('I see item menu {string}', async function (expectedText) {
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
