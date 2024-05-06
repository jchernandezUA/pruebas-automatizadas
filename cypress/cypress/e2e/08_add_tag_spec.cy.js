const LoginPageObject = require("../support/LoginPageObject")
const PagePostPageObject = require("../support/PagePostPageObject")
const DashboardPageObject = require("../support/DashboardPageObject")

describe('Testing change password', () => {
  it('Como usuario quiero cambiar contraseña', () => {
    //Given I login as admin in Ghost
    LoginPageObject.signIn()
    //When I click on new post
    DashboardPageObject.startNewPost()
    // When I add a new post with title "New post"
    PagePostPageObject.createNew()
    // When I open the post settings
    PagePostPageObject.openSettings()

    // When I add a new tag named "TAG_NEW"
    PagePostPageObject.addTag()
    // Then I verify the post tag "TAG_NEW"
    DashboardPageObject.verifyTag()
  })

  
})