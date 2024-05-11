const LoginPageObject = require("../support/LoginPageObject")
const DashboardPageObject = require("../support/DashboardPageObject")
const EditSiteDescPageObject = require("../support/EditSiteDescPageObject");

describe('As a user I want to edit the site description', () => {
  it('Edit site description', () => {
    // Set up
    LoginPageObject.signIn()

    // Act
    DashboardPageObject.clickSettingsIcon()
    EditSiteDescPageObject.clickDescButton()
    EditSiteDescPageObject.editDescription()
    EditSiteDescPageObject.clickSaveDescButton()

    // Assert
    DashboardPageObject.goToHomepage()
    EditSiteDescPageObject.seeDescriptionContainsNewDescription();

    // Tear down
    DashboardPageObject.goToAdminPage()
    DashboardPageObject.clickSettingsIcon()
    EditSiteDescPageObject.clickDescButton()
    EditSiteDescPageObject.putDefaultDescription()
    EditSiteDescPageObject.clickSaveDescButton()
  })
})