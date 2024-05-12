const LoginPageObject = require("./pageObjects/LoginPageObject")
const DashboardPageObject = require("./pageObjects/DashboardPageObject")
const SitePrivatePageObject = require("./pageObjects/SitePrivatePageObject");

describe('As a user I want to make the site private', () => {
  it('Make the site private', () => {
    // Set up
    LoginPageObject.signIn()
    // Act
    DashboardPageObject.clickSettingsIcon()
    SitePrivatePageObject.screenshot(1)
    SitePrivatePageObject.clickSitePrivateButton()
    SitePrivatePageObject.screenshot(2)
    SitePrivatePageObject.setPrivatePassword()
    SitePrivatePageObject.screenshot(3)
    DashboardPageObject.clickSaveSettingsButton()
    SitePrivatePageObject.screenshot(4)
    // Assert
    DashboardPageObject.goToHomepage()
    SitePrivatePageObject.screenshot(5)
    SitePrivatePageObject.seePrivateWarningText()
    SitePrivatePageObject.screenshot(6)
    // Tear down
    DashboardPageObject.goToAdminPage()
    DashboardPageObject.clickSettingsIcon()
    SitePrivatePageObject.clickSitePrivateButton()
    DashboardPageObject.clickSaveSettingsButton()
  })
})