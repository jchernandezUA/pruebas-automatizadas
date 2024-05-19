const {Given, When, Then} = require('@cucumber/cucumber');
const AddMenuPageObject = require('../support/AddMenuPageObject');
const EditItemPageObject = require('../support/EditItemPageObject');
const DashboardPageObject = require('../support/DashboardPageObject');

Given('I add menu item {string}', async function(label) {
  let dashboardPO = new DashboardPageObject(this.driver)
  let addMenuPO = new AddMenuPageObject(this.driver)
  await dashboardPO.clickSettingsIcon();
  await addMenuPO.clickNavigationCustomizeButton();
  await addMenuPO.enterNewLabel(label);
  await addMenuPO.clickNavigationCustomizeOkButton();
  await addMenuPO.clickNavigationCustomizeButton();
})

When('I edit the last item to {string}', async function(label) {
  let addMenuPO = new AddMenuPageObject(this.driver)
  let editMenuPO = new EditItemPageObject(this.driver)
  await editMenuPO.editLabel(label);
  await addMenuPO.clickNavigationCustomizeOkButton();
});
