const LoginPageObject = require("../../support/LoginPageObject")
const AddMenuPageObject = require("../../support/AddMenuPageObject")
const DashboardPageObject = require("../../support/DashboardPageObject")

describe('As a user I want to add a menu item', () => {
  it('Add menu item', () => {
    // Set up
    LoginPageObject.signIn()
    // Act
    DashboardPageObject.clickSettingsIcon()
    AddMenuPageObject.clickNavigationCustomizeButton()
    AddMenuPageObject.enterNewLabel()
    AddMenuPageObject.clickNavigationCustomizeOkButton()
    AddMenuPageObject.clickNavigationCustomizeButton()
    // Assert
    DashboardPageObject.goToHomepage()
    AddMenuPageObject.seeTheNewItemMenu()
    // Tear down
    DashboardPageObject.goToAdminPage()
    DashboardPageObject.clickSettingsIcon()
    AddMenuPageObject.clickNavigationCustomizeButton()
    AddMenuPageObject.deleteItemMenu()
    AddMenuPageObject.clickNavigationCustomizeOkButton()
  })
})