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
    EditMenuPageObject.editLabel()
    AddMenuPageObject.clickNavigationCustomizeOkButton()
    // Assert
    DashboardPageObject.goToHomepage()
    EditMenuPageObject.seeTheEditedItemMenu()
    // Tear down
    DashboardPageObject.goToAdminPage()
    DashboardPageObject.clickSettingsIcon()
    AddMenuPageObject.clickNavigationCustomizeButton()
    AddMenuPageObject.deleteItemMenu(true)
    AddMenuPageObject.clickNavigationCustomizeOkButton()
  })
})