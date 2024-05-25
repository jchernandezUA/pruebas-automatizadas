const DashboardPageObject = require("../../support/DashboardPageObject")
const LoginPageObject = require("../../support/LoginPageObject")
const ProfilePageObject = require("../../support/ProfilePageObject")
const Utils = require('../../support/Utils')

describe('Edit profile ', () => {
  it('Change admin full name ', () => {
    //Given 
    LoginPageObject.signIn()
    Utils.screenshot("ss_edit_profile_01")
    //When 
    DashboardPageObject.clickOnAvatar()
    Utils.screenshot("ss_edit_profile_02")
    DashboardPageObject.openProfile()  
    Utils.screenshot("ss_edit_profile_03")
    ProfilePageObject.changeName("sdsakdjlsakdjsalkdjaskldjaskldjaskldjaslkdjaslkdjsakldjaskldjsakldjsakldjsakldjaslkdjaskldjasdjaskldjsalkdjaksldjaksljdklasjdalksjdalksdjaskldjaslkdjaskldjalkdalklsjdklsajlkjakljdlajl")
    Utils.screenshot("ss_edit_profile_04")
    cy.wait(3000)
    ProfilePageObject.saveAndClose()
    Utils.screenshot("ss_edit_profile_05")
    //Then
    ProfilePageObject.verifyName()
    cy.wait(2000)
    Utils.screenshot("ss_edit_profile_06")
    //Tear down
    ProfilePageObject.resetName()
  })
}) 