const LoginPageObject = require("../support/LoginPageObject")
const PagePostPageObject = require("../support/PagePostPageObject")
const DashboardPageObject = require("../support/DashboardPageObject")

describe('Testing change password', () => {
  it('Como usuario quiero cambiar contraseña', () => {
    
    //Given
    LoginPageObject.signIn()
    //When
    DashboardPageObject.startNewPost()
    PagePostPageObject.createNew()
    PagePostPageObject.openSettings()
    PagePostPageObject.addTag()
    // Then
    DashboardPageObject.verifyTag()
  })
})