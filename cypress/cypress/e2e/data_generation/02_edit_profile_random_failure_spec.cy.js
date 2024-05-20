const DashboardPageObject = require("../../support/DashboardPageObject")
const LoginPageObject = require("../../support/LoginPageObject")
const ProfilePageObject = require("../../support/ProfilePageObject")
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

describe('Edit profile from random generated data ', () => {
  it('Change admin full name with a image uri', () => {
    //Given 
    let name = `${faker.image.dataUri()}`
    ProfilePageObject.changeName(name)
    cy.screenshot("ss_edit_profile_04")
    ProfilePageObject.saveAndClose()
    cy.screenshot("ss_edit_profile_05")
    //Then
    ProfilePageObject.verifyError('Name is too long')
    cy.wait(2000)
    cy.screenshot("ss_edit_profile_06")
  })

  it('Change admin website with no url', () => {
    let website = `${faker.database.column()}`
    ProfilePageObject.changeWebsite(website)
    cy.screenshot("ss_edit_profile_04")
    ProfilePageObject.saveAndClose()
    cy.screenshot("ss_edit_profile_05")
    //Then
    cy.wait(2000)
    ProfilePageObject.verifyPopupError()
  })

  it('Change bio with 201', () => {
    let bio = faker.string.alphanumeric(201)
    ProfilePageObject.changeBio(bio)
    cy.screenshot("ss_edit_profile_04")
    ProfilePageObject.saveAndClose()
    cy.screenshot("ss_edit_profile_05")
    //Then
    cy.wait(2000)
    ProfilePageObject.verifyError('Bio is too long')
  })

}) 