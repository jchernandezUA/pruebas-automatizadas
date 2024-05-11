
const LoginPageObject = require("./pageObjects/LoginPageObject")
const PagePageObject = require("./pageObjects/PagePageObject")
const DashboardPageObject = require("./pageObjects/DashboardPageObject")

describe('Testing change password', () => {
  it('Como usuario quiero cambiar contraseña', () => {

        /*
    
@user1 @web
Scenario: Como usuario inicio sesión, agrego un post y le agrego un tag al post
  Given I login as admin in Ghost
  When I open pages
  And I wait for 2 seconds
  When I add a new page with title "NEW PAGE"
  And I wait for 2 seconds
  Then I verify the published message
    
    */


    //Given
    LoginPageObject.signIn()
    cy.screenshot("ss_add_page_01")
    //When
    cy.screenshot("ss_add_page_02")
    DashboardPageObject.startNewPage()
    cy.screenshot("ss_add_page_02")
    PagePageObject.typeTitle()
    cy.screenshot("ss_add_page_03")
    PagePageObject.publish()
    cy.screenshot("ss_add_page_04")
    PagePageObject.backPages('Pages')
    cy.screenshot("ss_add_page_05")
    // Then
    DashboardPageObject.verifyPage()
    cy.screenshot("ss_add_page_06")
    //Teardown
    DashboardPageObject.openFirstPublishedPage()
    PagePageObject.deletePage()
  })
})