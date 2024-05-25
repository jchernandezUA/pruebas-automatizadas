const LoginPageObject = require("../../support/LoginPageObject")
const PagePostPageObject = require("../../support/PagePostPageObject")
const DashboardPageObject = require("../../support/DashboardPageObject")
const Utils = require('../../support/Utils')

describe('Testing delete tag to post', () => {
  it('Test add post, add tag to post and delete tag', () => {
    //Given
    LoginPageObject.signIn()
    Utils.screenshot("ss_add_tag_post_01")
    //When
    DashboardPageObject.startNewPost()
    Utils.screenshot("ss_add_tag_post_02")
    PagePostPageObject.typeTitle()
    Utils.screenshot("ss_add_tag_post_03")
    PagePostPageObject.publish()
    PagePostPageObject.openSettings()
    Utils.screenshot("ss_add_tag_post_05")
    PagePostPageObject.addTag()
    Utils.screenshot("ss_delete_tag_post_06")
    DashboardPageObject.clickPublished()
    Utils.screenshot("ss_delete_tag_post_07")
    DashboardPageObject.openFirstPublishedPost()
    Utils.screenshot("ss_delete_tag_post_08")
    PagePostPageObject.deleteTag()
    Utils.screenshot("ss_delete_tag_post_09")
    // Then
    DashboardPageObject.verifyPostWithNoTag()
    Utils.screenshot("ss_delete_tag_post_10")
    //Teardown
    DashboardPageObject.openFirstPublishedPage()
    PagePostPageObject.deletePage()
  })
})