const DashboardPageObject = require("../../support/DashboardPageObject")
const LoginPageObject = require("../../support/LoginPageObject")
const ProfilePageObject = require("../../support/ProfilePageObject")
const properties = require('../../fixtures/properties.json')
import {faker} from '@faker-js/faker'

var jsonData = []

beforeEach(() => {
  cy.request('https://my.api.mockaroo.com/incorrect_passwords.json?key=86bc46c0')
  .then((response) => {
    expect(response.status).to.eq(200);
    jsonData = response.body;
  });
});

describe('Testing failing change password with remote random data', () => {
  it('Test change user admin password', () => {
    //Given
    LoginPageObject.signIn()
    cy.screenshot("ss_change_password_01")
    //When
    DashboardPageObject.clickOnAvatar()
    cy.screenshot("ss_change_password_02")
    DashboardPageObject.openProfile()
    cy.screenshot("ss_change_password_03")

    const randomNumber = Math.floor(Math.random() * jsonData.length); 

    ProfilePageObject.updatePassword(
      properties['<GHOST_PASSWORD>'],
      jsonData[randomNumber]["incorrect_password"]
    )
    cy.screenshot("ss_change_password_04")
    //Then
    ProfilePageObject.verifyError('Password must be at least 10 characters long.')
    cy.screenshot("ss_change_password_05")
  })
})