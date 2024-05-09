const LoginPageObject = require("../support/LoginPageObject")
const AddMenuPageObject = require("../support/AddMenuPageObject")
const EditSiteLangPageObject = require("../support/EditSiteLangPageObject");

describe('As a user I want to edit the site language', () => {
  it('Edit site language', () => {
    // Set up
    LoginPageObject.signIn()

    // Act
    AddMenuPageObject.clickSettingsIcon()
    EditSiteLangPageObject.clickLangButton()
    EditSiteLangPageObject.editLanguage()
    EditSiteLangPageObject.clickSaveLangButton()

    // Assert
    AddMenuPageObject.goToHomepage()
    EditSiteLangPageObject.seeEditedLang()

    // Tear down
    AddMenuPageObject.goToAdminPage()
    AddMenuPageObject.clickSettingsIcon()
    EditSiteLangPageObject.clickLangButton()
    EditSiteLangPageObject.putDefaultLang()
    EditSiteLangPageObject.clickSaveLangButton()
  })
})