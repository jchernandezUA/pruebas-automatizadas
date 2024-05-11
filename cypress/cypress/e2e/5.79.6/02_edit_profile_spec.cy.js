const DashboardPageObject = require("../../support/DashboardPageObject")
const LoginPageObject = require("../../support/LoginPageObject")
const ProfilePageObject = require("../../support/ProfilePageObject")

describe('Edit profile ', () => {
  it('Change admin full name ', () => {
    //Given 
    LoginPageObject.signIn()
    cy.screenshot("ss_edit_profile_01")
    //When 
    DashboardPageObject.clickOnAvatar()
    cy.screenshot("ss_edit_profile_02")
    DashboardPageObject.openProfile()  
    cy.screenshot("ss_edit_profile_03")
    ProfilePageObject.changeName()
    cy.screenshot("ss_edit_profile_04")
    cy.wait(3000)
    ProfilePageObject.saveAndClose()
    cy.screenshot("ss_edit_profile_05")
    //Then
    ProfilePageObject.verifyName()
    cy.wait(2000)
    cy.screenshot("ss_edit_profile_06")
    //Tear down
    ProfilePageObject.resetName()
  })
}) 