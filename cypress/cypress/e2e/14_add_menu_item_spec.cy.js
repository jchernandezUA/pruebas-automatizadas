const LoginPageObject = require("../support/LoginPageObject")
const AddMenuPageObject = require("../support/AddMenuPageObject")

describe('As a user I want to add a menu item', () => {
  it('Add menu item', () => {
    // Set up
    LoginPageObject.signIn()
    // Act
    AddMenuPageObject.clickSettingsIcon()
    AddMenuPageObject.clickNavigationCustomizeButton()
    AddMenuPageObject.enterNewLabel()
    AddMenuPageObject.clickNavigationCustomizeOkButton()
    AddMenuPageObject.clickNavigationCustomizeButton()
    // Assert
    AddMenuPageObject.goToHomepage()
    AddMenuPageObject.seeTheNewItemMenu()
    // Tear down
    AddMenuPageObject.goToAdminPage()
    AddMenuPageObject.clickSettingsIcon()
    AddMenuPageObject.clickNavigationCustomizeButton()
    AddMenuPageObject.deleteItemMenu()
    AddMenuPageObject.clickNavigationCustomizeOkButton()
  })
})