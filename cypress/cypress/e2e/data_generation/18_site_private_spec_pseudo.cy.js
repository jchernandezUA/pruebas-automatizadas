const LoginPageObject = require("../../support/LoginPageObject")
const DashboardPageObject = require("../../support/DashboardPageObject")
const SitePrivatePageObject = require("../../support/SitePrivatePageObject");

describe('As a user I want to make the site private', () => {
  it('Make the site private', () => {
    // Set up
    LoginPageObject.signIn()
    // Act
    DashboardPageObject.clickSettingsIcon()
    SitePrivatePageObject.screenshot(1)
    SitePrivatePageObject.clickSitePrivateButton()
    SitePrivatePageObject.screenshot(2)
    SitePrivatePageObject.switchPrivate()
    SitePrivatePageObject.screenshot(3)
    SitePrivatePageObject.setRandomPrivatePasswordFromAPI()
    SitePrivatePageObject.screenshot(4)
    SitePrivatePageObject.clickSavePrivateButton()
    SitePrivatePageObject.screenshot(5)
    // Assert
    DashboardPageObject.goToHomepage()
    SitePrivatePageObject.screenshot(6)
    SitePrivatePageObject.seePrivateWarningText()
    SitePrivatePageObject.screenshot(7)
    // Tear down
    DashboardPageObject.goToAdminPage()
    DashboardPageObject.clickSettingsIcon()
    SitePrivatePageObject.clickSitePrivateButton()
    SitePrivatePageObject.switchPrivate()
    SitePrivatePageObject.clickSavePrivateButton()
  })
})