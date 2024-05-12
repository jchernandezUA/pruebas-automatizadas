const LoginPageObject = require("./pageObjects/LoginPageObject")
const DashboardPageObject = require("./pageObjects/DashboardPageObject")
const EditSiteLangPageObject = require("./pageObjects/EditSiteLangPageObject");

describe('As a user I want to edit the site language', () => {
  it('Edit site language', () => {
    // Set up
    LoginPageObject.signIn()
    // Act
    DashboardPageObject.clickSettingsIcon()
    EditSiteLangPageObject.screenshot(1)
    EditSiteLangPageObject.clickLangButton()
    EditSiteLangPageObject.screenshot(2)
    EditSiteLangPageObject.editLanguage()
    EditSiteLangPageObject.screenshot(3)
    DashboardPageObject.clickSaveSettingsButton()
    EditSiteLangPageObject.screenshot(4)
    // Assert
    DashboardPageObject.goToHomepage()
    EditSiteLangPageObject.screenshot(5)
    EditSiteLangPageObject.seeEditedLang()
    EditSiteLangPageObject.screenshot(6)
    // Tear down
    DashboardPageObject.goToAdminPage()
    DashboardPageObject.clickSettingsIcon()
    EditSiteLangPageObject.clickLangButton()
    EditSiteLangPageObject.putDefaultLang()
    DashboardPageObject.clickSaveSettingsButton()
  })
})