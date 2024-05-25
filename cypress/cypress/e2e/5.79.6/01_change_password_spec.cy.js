const DashboardPageObject = require("../../support/DashboardPageObject")
const LoginPageObject = require("../../support/LoginPageObject")
const ProfilePageObject = require("../../support/ProfilePageObject")
const Utils = require('../../support/Utils')

describe('Testing change password', () => {
  it('Test change user admin password', () => {
    //Given
    LoginPageObject.signIn()
    Utils.screenshot("ss_change_password_01")
    //When
    DashboardPageObject.clickOnAvatar()
    Utils.screenshot("ss_change_password_02")
    DashboardPageObject.openProfile()
    Utils.screenshot("ss_change_password_03")
    ProfilePageObject.changePassword()
    Utils.screenshot("ss_change_password_04")
    //Then
    ProfilePageObject.verifyUpdatedMessage()
    Utils.screenshot("ss_change_password_05")
    cy.wait(3000)
    //Tear down
    ProfilePageObject.resetPassword()
  })
})