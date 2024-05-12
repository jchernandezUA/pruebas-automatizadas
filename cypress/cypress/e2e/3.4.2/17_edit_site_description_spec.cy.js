const LoginPageObject = require("./pageObjects/LoginPageObject")
const DashboardPageObject = require("./pageObjects/DashboardPageObject")
const EditSiteDescPageObject = require("./pageObjects/EditSiteDescPageObject");

describe('As a user I want to edit the site description', () => {
  it('Edit site description', () => {
    // Set up
    LoginPageObject.signIn()
    // Act
    DashboardPageObject.clickSettingsIcon()
    EditSiteDescPageObject.screenshot(1)
    EditSiteDescPageObject.clickDescButton()
    EditSiteDescPageObject.screenshot(2)
    EditSiteDescPageObject.editDescription()
    EditSiteDescPageObject.screenshot(3)
    DashboardPageObject.clickSaveSettingsButton()
    EditSiteDescPageObject.screenshot(4)
    // Assert
    DashboardPageObject.goToHomepage()
    EditSiteDescPageObject.screenshot(5)
    EditSiteDescPageObject.seeDescriptionContainsNewDescription()
    EditSiteDescPageObject.screenshot(6)
    // Tear down
    DashboardPageObject.goToAdminPage()
    DashboardPageObject.clickSettingsIcon()
    EditSiteDescPageObject.clickDescButton()
    EditSiteDescPageObject.putDefaultDescription()
    DashboardPageObject.clickSaveSettingsButton()
  })
})