const DashboardPageObject = require("../../support/DashboardPageObject")
const LoginPageObject = require("../../support/LoginPageObject")
const ProfilePageObject = require("../../support/ProfilePageObject")

describe('Testing change password', () => {
  it('Test change user admin password', () => {
    //Given
    LoginPageObject.signIn()
    cy.screenshot("ss_change_password_01")
    //When
    DashboardPageObject.clickOnAvatar()
    cy.screenshot("ss_change_password_02")
    DashboardPageObject.openProfile()
    cy.screenshot("ss_change_password_03")
    ProfilePageObject.changePassword()
    cy.screenshot("ss_change_password_04")
    //Then
    ProfilePageObject.verifyUpdatedMessage()
    cy.screenshot("ss_change_password_05")
    cy.wait(3000)
    //Tear down
    ProfilePageObject.resetPassword()
  })
})