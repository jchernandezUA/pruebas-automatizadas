const LoginPageObject = require("../../support/LoginPageObject")
const PagePostPageObject = require("../../support/PagePostPageObject")
const DashboardPageObject = require("../../support/DashboardPageObject")

describe('Add tag to a post', () => {
  it('Test add post and add tag', () => { 
    //Given
    LoginPageObject.signIn()
    cy.screenshot("ss_add_tag_post_01")
    //When
    DashboardPageObject.startNewPost()
    cy.screenshot("ss_add_tag_post_02")
    PagePostPageObject.typeTitle()
    cy.screenshot("ss_add_tag_post_03")
    PagePostPageObject.publish()
    PagePostPageObject.openSettings()
    cy.screenshot("ss_add_tag_post_05")
    PagePostPageObject.addTag()
    cy.screenshot("ss_add_tag_post_06")
    // Then
    DashboardPageObject.verifyTag()
    cy.screenshot("ss_add_tag_post_07")
  })
})