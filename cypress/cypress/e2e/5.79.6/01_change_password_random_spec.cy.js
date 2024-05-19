const DashboardPageObject = require("../../support/DashboardPageObject")
const LoginPageObject = require("../../support/LoginPageObject")
const ProfilePageObject = require("../../support/ProfilePageObject")
const properties = require('../../fixtures/properties.json')
import {faker} from '@faker-js/faker'

describe('Testing success change password with random data', () => {
  it('Test change user admin password with a big string', () => {
    //Given
    LoginPageObject.signIn()
    cy.screenshot("ss_change_password_01")
    //When
    DashboardPageObject.clickOnAvatar()
    cy.screenshot("ss_change_password_02")
    DashboardPageObject.openProfile()
    cy.screenshot("ss_change_password_03")
    let password = faker.image.dataUri()
    ProfilePageObject.updatePassword(
      properties['<GHOST_PASSWORD>'],
      password
    )
    cy.screenshot("ss_change_password_04")
    //Then
    ProfilePageObject.verifyUpdatedMessage()
    cy.screenshot("ss_change_password_05")
    cy.wait(3000)
    //Tear down
    ProfilePageObject.resetPassword(password)
  })
})