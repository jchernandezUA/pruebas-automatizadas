const LoginPageObject = require("../../support/LoginPageObject")
const DashboardPageObject = require("../../support/DashboardPageObject")
const SitePrivatePageObject = require("../../support/SitePrivatePageObject");

describe('As a user I want to make the site private', () => {
  it('Make the site private', () => {
    // Set up
    LoginPageObject.signIn()

    // Act
    DashboardPageObject.clickSettingsIcon()
    SitePrivatePageObject.clickSitePrivateButton()
    SitePrivatePageObject.switchPrivate()
    SitePrivatePageObject.setPrivatePassword()
    SitePrivatePageObject.clickSavePrivateButton()

    // Assert
    DashboardPageObject.goToHomepage()
    SitePrivatePageObject.seePrivateWarningText();

    // Tear down
    DashboardPageObject.goToAdminPage()
    DashboardPageObject.clickSettingsIcon()
    SitePrivatePageObject.clickSitePrivateButton()
    SitePrivatePageObject.switchPrivate()
    SitePrivatePageObject.clickSavePrivateButton()
  })
})