
const LoginPageObject = require("../../support/LoginPageObject")
const PagePostPageObject = require("../../support/PagePostPageObject")
const DashboardPageObject = require("../../support/DashboardPageObject")
const Utils = require('../../support/Utils')

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
    Utils.screenshot("ss_add_page_01")
    //When
    Utils.screenshot("ss_add_page_02")
    DashboardPageObject.startNewPage()
    Utils.screenshot("ss_add_page_02")
    PagePostPageObject.typeTitle()
    Utils.screenshot("ss_add_page_03")
    PagePostPageObject.publish()
    Utils.screenshot("ss_add_page_04")
    PagePostPageObject.backPages('Pages')
    Utils.screenshot("ss_add_page_05")
    // Then
    DashboardPageObject.verifyPage()
    Utils.screenshot("ss_add_page_06")
    //Teardown
    DashboardPageObject.openFirstPublishedPage()
    PagePostPageObject.deletePage()

  })
})