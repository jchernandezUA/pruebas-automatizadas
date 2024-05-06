const LoginPageObject = require("../support/LoginPageObject")
const ProfilePageObject = require("../support/ProfilePageObject")

describe('Testing change password', () => {
  it('Como usuario quiero cambiar contraseña', () => {
    //Given
    LoginPageObject.signIn()
    //When
    ProfilePageObject.openProfile()
    ProfilePageObject.changePassword()
    //Then
    ProfilePageObject.verifyUpdatedMessage()
    cy.wait(3000)
    //Tear down
    ProfilePageObject.resetPassword()
  })
})