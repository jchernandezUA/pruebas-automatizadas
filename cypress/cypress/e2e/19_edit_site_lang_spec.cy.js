const LoginPageObject = require("../support/LoginPageObject")
const DashboardPageObject = require("../support/DashboardPageObject")
const EditSiteLangPageObject = require("../support/EditSiteLangPageObject");

describe('As a user I want to edit the site language', () => {
  it('Edit site language', () => {
    // Set up
    LoginPageObject.signIn()

    // Act
    DashboardPageObject.clickSettingsIcon()
    EditSiteLangPageObject.clickLangButton()
    EditSiteLangPageObject.editLanguage()
    EditSiteLangPageObject.clickSaveLangButton()

    // Assert
    DashboardPageObject.goToHomepage()
    EditSiteLangPageObject.seeEditedLang()

    // Tear down
    DashboardPageObject.goToAdminPage()
    DashboardPageObject.clickSettingsIcon()
    EditSiteLangPageObject.clickLangButton()
    EditSiteLangPageObject.putDefaultLang()
    EditSiteLangPageObject.clickSaveLangButton()
  })
})