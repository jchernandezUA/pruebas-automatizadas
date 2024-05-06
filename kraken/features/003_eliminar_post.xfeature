Feature: Gestión de posts en Ghost CMS

@user3 @web
Scenario: Eliminar un post existente
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  When I enter identification "<GHOST_MAIL_M>"
  And I wait for 1 seconds
  And I enter password  "<GHOST_PASSWORD_M>"
  And I wait for 1 seconds
  And I click next
  And I wait for 1 seconds
  And I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 4 seconds
  When I select and delete the post with title "New Post Title"
  And I wait for 5 seconds
  Then I should see post with title "New Post Title" deleted
