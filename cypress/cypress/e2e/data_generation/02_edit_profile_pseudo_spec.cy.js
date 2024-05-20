const DashboardPageObject = require("../../support/DashboardPageObject")
const LoginPageObject = require("../../support/LoginPageObject")
const ProfilePageObject = require("../../support/ProfilePageObject")

var jsonData = []

beforeEach(() => {
  cy.request('https://my.api.mockaroo.com/users.json?key=86bc46c0')
  .then((response) => {
    expect(response.status).to.eq(200);
    jsonData = response.body;
  });

  //Given
  LoginPageObject.signIn()
  cy.screenshot("ss_edit_profile_01")
  //When 
  DashboardPageObject.clickOnAvatar()
  cy.screenshot("ss_edit_profile_02")
  DashboardPageObject.openProfile()  
  cy.screenshot("ss_edit_profile_03")
})

describe('Edit profile from a remote random data', () => {
  
  it('Change admin full name with a image uri', () => {

    const randomNumber = Math.floor(Math.random() * jsonData.length); 
    let name = jsonData[randomNumber]["long_value"]
    
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

    const randomNumber = Math.floor(Math.random() * jsonData.length); 
    let website = jsonData[randomNumber]["full_name"]

    ProfilePageObject.changeWebsite(website)
    cy.screenshot("ss_edit_profile_04")
    ProfilePageObject.saveAndClose()
    cy.screenshot("ss_edit_profile_05")
    //Then
    cy.wait(2000)
    ProfilePageObject.verifyPopupError()
  })


  it('Change bio with 201', () => {
    const randomNumber = Math.floor(Math.random() * jsonData.length); 
    let bio = jsonData[randomNumber]["long_value"]
    
    ProfilePageObject.changeBio(bio)
    cy.screenshot("ss_edit_profile_04")
    ProfilePageObject.saveAndClose()
    cy.screenshot("ss_edit_profile_05")
    //Then
    cy.wait(2000)
    ProfilePageObject.verifyError('Bio is too long')
  })
}) 