const LoginPageObject = require("../../support/LoginPageObject")
const PagePostPageObject = require("../../support/PagePostPageObject")
const DashboardPageObject = require("../../support/DashboardPageObject")
const Utils = require('../../support/Utils')

describe('Add tag to a post', () => {
  it('Test add post and add tag', () => { 
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
    Utils.screenshot("ss_add_tag_post_06")
    // Then
    DashboardPageObject.verifyTag()
    Utils.screenshot("ss_add_tag_post_07")
  })
})