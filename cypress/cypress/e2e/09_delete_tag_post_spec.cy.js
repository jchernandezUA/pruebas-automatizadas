const LoginPageObject = require("../support/LoginPageObject")
const PagePostPageObject = require("../support/PagePostPageObject")
const DashboardPageObject = require("../support/DashboardPageObject")

describe('Testing change password', () => {
  it('Como usuario quiero cambiar contraseña', () => {
    
    //Given
    LoginPageObject.signIn()
    //When
    DashboardPageObject.startNewPost()
    PagePostPageObject.createNew()
    PagePostPageObject.openSettings()
    PagePostPageObject.addTag()
    DashboardPageObject.clickPublished()
    DashboardPageObject.openFirstPublishedPost()
    PagePostPageObject.deleteTag()
    // Then
    DashboardPageObject.verifyPostWithNoTag()
    //Teardown
    DashboardPageObject.openFirstPublishedPage()
    PagePostPageObject.deletePage()
  })
})