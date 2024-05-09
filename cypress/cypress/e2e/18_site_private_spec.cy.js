const LoginPageObject = require("../support/LoginPageObject")
const AddMenuPageObject = require("../support/AddMenuPageObject")
const SitePrivatePageObject = require("../support/SitePrivatePageObject");

describe('As a user I want to make the site private', () => {
  it('Make the site private', () => {
    // Set up
    LoginPageObject.signIn()

    // Act
    AddMenuPageObject.clickSettingsIcon()
    SitePrivatePageObject.clickSitePrivateButton()
    SitePrivatePageObject.switchPrivate()
    SitePrivatePageObject.setPrivatePassword()
    SitePrivatePageObject.clickSavePrivateButton()

    // Assert
    AddMenuPageObject.goToHomepage()
    SitePrivatePageObject.seePrivateWarningText();

    // Tear down
    AddMenuPageObject.goToAdminPage()
    AddMenuPageObject.clickSettingsIcon()
    SitePrivatePageObject.clickSitePrivateButton()
    SitePrivatePageObject.switchPrivate()
    SitePrivatePageObject.clickSavePrivateButton()
  })
})