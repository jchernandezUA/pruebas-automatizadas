
const LoginPageObject = require("../support/LoginPageObject")
const PagePostPageObject = require("../support/PagePostPageObject")
const DashboardPageObject = require("../support/DashboardPageObject")

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
    //When
    DashboardPageObject.startNewPage()
    PagePostPageObject.createNew()
    PagePostPageObject.backPages('Pages')
    // Then
    DashboardPageObject.verifyPage()

    //Teardown
    DashboardPageObject.openFirstPublishedPage()
    PagePostPageObject.deletePage()

  })
})