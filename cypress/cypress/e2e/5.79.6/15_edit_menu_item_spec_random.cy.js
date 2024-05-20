const LoginPageObject = require("../../support/LoginPageObject")
const AddMenuPageObject = require("../../support/AddMenuPageObject")
const EditMenuPageObject = require("../../support/EditMenuPageObject");
const DashboardPageObject = require("../../support/DashboardPageObject")

describe('As a user I want to edit a menu item', () => {
  it('Edit menu item', () => {
    // Set up
    LoginPageObject.signIn()
    DashboardPageObject.clickSettingsIcon()
    AddMenuPageObject.clickNavigationCustomizeButton()
    AddMenuPageObject.enterNewLabel()
    AddMenuPageObject.clickNavigationCustomizeOkButton()
    // Act
    AddMenuPageObject.clickNavigationCustomizeButton()
    EditMenuPageObject.screenshot(1)
    EditMenuPageObject.editMenuItemWithFakerLabel()
    EditMenuPageObject.screenshot(2)
    AddMenuPageObject.clickNavigationCustomizeOkButton()
    EditMenuPageObject.screenshot(3)
    // Assert
    DashboardPageObject.goToHomepage()
    EditMenuPageObject.screenshot(4)
    EditMenuPageObject.seeTheEditedItemMenu()
    EditMenuPageObject.screenshot(5)
    // Tear down
    DashboardPageObject.goToAdminPage()
    DashboardPageObject.clickSettingsIcon()
    AddMenuPageObject.clickNavigationCustomizeButton()
    EditMenuPageObject.deleteItemMenu()
    AddMenuPageObject.clickNavigationCustomizeOkButton()
  })
})