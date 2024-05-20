const DashboardPageObject = require("../../support/DashboardPageObject")
const LoginPageObject = require("../../support/LoginPageObject")
const ProfilePageObject = require("../../support/ProfilePageObject")
import usersData from '../../fixtures/edit_profile.json'

beforeEach(() => {
  LoginPageObject.signIn()
    cy.screenshot("ss_edit_profile_01")
    //When 
    DashboardPageObject.clickOnAvatar()
    cy.screenshot("ss_edit_profile_02")
    DashboardPageObject.openProfile()  
    cy.screenshot("ss_edit_profile_03")
})

describe('Edit profile from preloaded data ', () => {
  it('Change admin full name with a image uri', () => {
    //Given 
    const randomNumber = Math.floor(Math.random() * usersData.length); 
    let name = usersData[randomNumber]["long_value"]
    ProfilePageObject.changeName(name)
    cy.screenshot("ss_edit_profile_04")
    ProfilePageObject.saveAndClose()
    cy.screenshot("ss_edit_profile_05")
    //Then
    cy.wait(2000)
    ProfilePageObject.resetName()
    cy.screenshot("ss_edit_profile_06")
  })

  it('Change admin website with no url', () => {

    const randomNumber = Math.floor(Math.random() * usersData.length); 
    let website = usersData[randomNumber]["full_name"]

    ProfilePageObject.changeWebsite(website)
    cy.screenshot("ss_edit_profile_04")
    ProfilePageObject.saveAndClose()
    cy.screenshot("ss_edit_profile_05")
    //Then
    cy.wait(2000)
    ProfilePageObject.verifyPopupError()
  })

  it('Change bio with 201', () => {

    const randomNumber = Math.floor(Math.random() * usersData.length); 
    let bio = usersData[randomNumber]["long_value"]


    ProfilePageObject.changeBio(bio)
    cy.screenshot("ss_edit_profile_04")
    ProfilePageObject.saveAndClose()
    cy.screenshot("ss_edit_profile_05")
    //Then
    cy.wait(2000)
    ProfilePageObject.verifyError('Bio is too long')
  })

}) 