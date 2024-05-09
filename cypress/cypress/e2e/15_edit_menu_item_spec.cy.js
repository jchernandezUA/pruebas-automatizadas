const LoginPageObject = require("../support/LoginPageObject")
const AddMenuPageObject = require("../support/AddMenuPageObject")
const EditMenuPageObject = require("../support/EditMenuPageObject");

describe('As a user I want to edit a menu item', () => {
  it('Edit menu item', () => {
    // Set up
    LoginPageObject.signIn()
    AddMenuPageObject.clickSettingsIcon()
    AddMenuPageObject.clickNavigationCustomizeButton()
    AddMenuPageObject.enterNewLabel()
    AddMenuPageObject.clickNavigationCustomizeOkButton()
    // Act
    AddMenuPageObject.clickNavigationCustomizeButton()
    EditMenuPageObject.editLabel()
    AddMenuPageObject.clickNavigationCustomizeOkButton()
    // Assert
    AddMenuPageObject.goToHomepage()
    EditMenuPageObject.seeTheEditedItemMenu()
    // Tear down
    AddMenuPageObject.goToAdminPage()
    AddMenuPageObject.clickSettingsIcon()
    AddMenuPageObject.clickNavigationCustomizeButton()
    AddMenuPageObject.deleteItemMenu()
    AddMenuPageObject.clickNavigationCustomizeOkButton()
  })
})