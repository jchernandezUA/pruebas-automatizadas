const LoginPageObject = require("../../support/LoginPageObject")
const AddMenuPageObject = require("../../support/AddMenuPageObject")
const DashboardPageObject = require("../../support/DashboardPageObject")

describe('As a user I want to add a menu item', () => {
  it('Add menu item', () => {
    // Set up
    LoginPageObject.signIn()
    // Act
    DashboardPageObject.clickSettingsIcon()
    AddMenuPageObject.screenshot(1)
    AddMenuPageObject.clickNavigationCustomizeButton()
    AddMenuPageObject.screenshot(2)
    AddMenuPageObject.addMenuItemWithRandomLabel()
    AddMenuPageObject.screenshot(3)
    AddMenuPageObject.clickNavigationCustomizeOkButton()
    AddMenuPageObject.screenshot(4)
    AddMenuPageObject.clickNavigationCustomizeButton()
    AddMenuPageObject.screenshot(5)
    // Assert
    DashboardPageObject.goToHomepage()
    AddMenuPageObject.screenshot(6)
    AddMenuPageObject.seeTheNewItemMenu()
    AddMenuPageObject.screenshot(7)
    // Tear down
    DashboardPageObject.goToAdminPage()
    DashboardPageObject.clickSettingsIcon()
    AddMenuPageObject.clickNavigationCustomizeButton()
    AddMenuPageObject.deleteItemMenu()
    AddMenuPageObject.clickNavigationCustomizeOkButton()
  })
})