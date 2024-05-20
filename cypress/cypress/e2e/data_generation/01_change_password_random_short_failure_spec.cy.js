const DashboardPageObject = require("../../support/DashboardPageObject")
const LoginPageObject = require("../../support/LoginPageObject")
const ProfilePageObject = require("../../support/ProfilePageObject")
const properties = require('../../fixtures/properties.json')
import {faker} from '@faker-js/faker'

beforeEach(() => {
  LoginPageObject.signIn()
    cy.screenshot("ss_edit_profile_01")
    //When 
    DashboardPageObject.clickOnAvatar()
    cy.screenshot("ss_edit_profile_02")
    DashboardPageObject.openProfile()  
    cy.screenshot("ss_edit_profile_03")
})

describe('Testing failing change password with random generated data', () => {
  it('Test short string', () => {
    //Given
    DashboardPageObject.openProfile()
    cy.screenshot("ss_change_password_03")
    let password = faker.location.countryCode()
    ProfilePageObject.updatePassword(
      properties['<GHOST_PASSWORD>'],
      password
    )
    cy.screenshot("ss_change_password_04")
    //Then
    ProfilePageObject.verifyError('Password must be at least 10 characters long.')
    cy.screenshot("ss_change_password_05")
  })
})