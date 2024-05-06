const LoginPageObject = require("../support/LoginPageObject")
const ProfilePageObject = require("../support/ProfilePageObject")

describe('Testing change password', () => {
  it('Como usuario quiero cambiar contraseña', () => {
    //Given I login as admin in Ghost
    LoginPageObject.signIn()
    //When I open profile
    ProfilePageObject.openProfile()    
    //When I change full name
    ProfilePageObject.updateName()
    //And wait for 3 seconds
    cy.wait(3000)
    //Then I verify my name contains "_CH_"
    ProfilePageObject.verifyName() 

    //clear
    ProfilePageObject.resetName()
  })

  
})