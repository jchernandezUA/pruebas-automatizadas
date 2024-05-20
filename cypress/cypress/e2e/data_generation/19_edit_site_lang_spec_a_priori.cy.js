const LoginPageObject = require("../../support/LoginPageObject")
const DashboardPageObject = require("../../support/DashboardPageObject")
const EditSiteLangPageObject = require("../../support/EditSiteLangPageObject");

describe('As a user I want to edit the site language', () => {
  it('Edit site language', () => {
    // Set up
    LoginPageObject.signIn()
    // Act
    DashboardPageObject.clickSettingsIcon()
    EditSiteLangPageObject.screenshot(1)
    EditSiteLangPageObject.clickLangButton()
    EditSiteLangPageObject.screenshot(2)
    EditSiteLangPageObject.editLanguageFromJSON()
    EditSiteLangPageObject.screenshot(3)
    EditSiteLangPageObject.clickSaveLangButton()
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
    EditSiteLangPageObject.clickSaveLangButton()
  })
})