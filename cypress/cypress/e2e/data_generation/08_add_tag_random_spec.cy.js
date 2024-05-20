const LoginPageObject = require("../../support/LoginPageObject")
const PagePostPageObject = require("../../support/PagePostPageObject")
const DashboardPageObject = require("../../support/DashboardPageObject")
import {faker} from '@faker-js/faker'

var postsData = []

beforeEach(() => {
  //Given
  LoginPageObject.signIn()
  cy.screenshot("ss_add_tag_post_01")
}) 


describe('Add tag to a post with preloaded data', () => {
  
  it('Test add post and add tag success', () => { 

    DashboardPageObject.startNewPost()
    cy.screenshot("ss_add_tag_post_02")
    PagePostPageObject.typeTitle()
    cy.screenshot("ss_add_tag_post_03")
    PagePostPageObject.publish()
    PagePostPageObject.openSettings()
    cy.screenshot("ss_add_tag_post_05")

    let tag = `${faker.database.column()}`

    PagePostPageObject.addTag(tag)
    cy.screenshot("ss_add_tag_post_06")
    // Then
    DashboardPageObject.verifyTag(tag)
    cy.screenshot("ss_add_tag_post_07")
    //Teardown
    DashboardPageObject.openFirstPublishedPost()
    PagePostPageObject.deletePost()
  })

  it('Test add post and add tag with invalid value', () => { 

    DashboardPageObject.startNewPost()
    cy.screenshot("ss_add_tag_post_02")
    PagePostPageObject.typeTitle()
    cy.screenshot("ss_add_tag_post_03")
    PagePostPageObject.publish()
    PagePostPageObject.openSettings()
    cy.screenshot("ss_add_tag_post_05")

    let tag = `${faker.image.dataUri()}`

    PagePostPageObject.addTag(tag)
    // Then
    PagePostPageObject.verifyError()
    //Teardown
    PagePostPageObject.leavePost()
    DashboardPageObject.openFirstPublishedPost()
    PagePostPageObject.deletePost()
  })

})