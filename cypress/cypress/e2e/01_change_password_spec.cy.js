const LoginPageObject = require("../support/LoginPageObject")
const ProfilePageObject = require("../support/ProfilePageObject")

describe('Testing change password', () => {
  it('Como usuario quiero cambiar contraseña', () => {
    //Given I login as admin in Ghost
    LoginPageObject.signIn()
    //When I open profile
    ProfilePageObject.openProfile()
    //When I change the password
    ProfilePageObject.changePassword()
    //Then I validate the password changed
    ProfilePageObject.verifyUpdatedMessage()
    cy.wait(3000)
    //CLEAN
    ProfilePageObject.resetPassword()
  })

  
})