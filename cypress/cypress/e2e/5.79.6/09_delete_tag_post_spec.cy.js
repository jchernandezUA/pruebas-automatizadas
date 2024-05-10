const LoginPageObject = require("../support/LoginPageObject")
const PagePostPageObject = require("../support/PagePostPageObject")
const DashboardPageObject = require("../support/DashboardPageObject")

describe('Testing change password', () => {
  it('Como usuario quiero cambiar contraseña', () => {
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
    cy.screenshot("ss_delete_tag_post_06")
    DashboardPageObject.clickPublished()
    cy.screenshot("ss_delete_tag_post_07")
    DashboardPageObject.openFirstPublishedPost()
    cy.screenshot("ss_delete_tag_post_08")
    PagePostPageObject.deleteTag()
    cy.screenshot("ss_delete_tag_post_09")
    // Then
    DashboardPageObject.verifyPostWithNoTag()
    cy.screenshot("ss_delete_tag_post_10")
    //Teardown
    DashboardPageObject.openFirstPublishedPage()
    PagePostPageObject.deletePage()
  })
})