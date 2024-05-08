const LoginPageObject = require("./support/LoginPageObject")
const PagePostPageObject = require("./support/PagePostPageObject")
const DashboardPageObject = require("./support/DashboardPageObject")

describe('Testing change password', () => {
  it('Como usuario quiero cambiar contraseña', () => { 
    //Given
    LoginPageObject.signIn()
    cy.screenshot("ss_342_add_tag_post_01")
    //When
    DashboardPageObject.startNewPost()
    cy.screenshot("ss_342_add_tag_post_02")
    PagePostPageObject.typeTitle()
    cy.screenshot("ss_342_add_tag_post_03")
    PagePostPageObject.publish()
    PagePostPageObject.openSettings()
    cy.screenshot("ss_342_add_tag_post_05")
    PagePostPageObject.addTag()
    cy.screenshot("ss_342_add_tag_post_06")
    // Then
    DashboardPageObject.verifyTag()
    cy.screenshot("ss_342_add_tag_post_07")
  })
})