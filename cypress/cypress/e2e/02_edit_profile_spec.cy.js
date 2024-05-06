const LoginPageObject = require("../support/LoginPageObject")
const ProfilePageObject = require("../support/ProfilePageObject")

describe('Testing change password', () => {
  it('Como usuario quiero cambiar contraseña', () => {
    //Given 
    LoginPageObject.signIn()
    //When 
    ProfilePageObject.openProfile()  
    ProfilePageObject.updateName()
    cy.wait(3000)
    //Then
    ProfilePageObject.verifyName() 
    //Tear down
    ProfilePageObject.resetName()
  })
})