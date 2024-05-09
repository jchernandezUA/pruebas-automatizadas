const LoginPageObject = require("../support/LoginPageObject")
const AddMenuPageObject = require("../support/AddMenuPageObject")
const EditSiteDescPageObject = require("../support/EditSiteDescPageObject");

describe('As a user I want to edit the site description', () => {
  it('Edit site description', () => {
    // Set up
    LoginPageObject.signIn()

    // Act
    AddMenuPageObject.clickSettingsIcon()
    EditSiteDescPageObject.clickDescButton()
    EditSiteDescPageObject.editDescription()
    EditSiteDescPageObject.clickSaveDescButton()

    // Assert
    AddMenuPageObject.goToHomepage()
    EditSiteDescPageObject.seeDescriptionContainsNewDescription();

    // Tear down
    AddMenuPageObject.goToAdminPage()
    AddMenuPageObject.clickSettingsIcon()
    EditSiteDescPageObject.clickDescButton()
    EditSiteDescPageObject.putDefaultDescription()
    EditSiteDescPageObject.clickSaveDescButton()
  })
})