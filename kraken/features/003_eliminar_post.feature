Feature: Eliminar publicaciones

@user3 @web
Scenario: Eliminar un post existente
  Given I login as admin in Ghost "delete_post" "003"
  And I wait for 1 seconds
  And I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 4 seconds
  When I select and delete the post with title "New Post Title"
  And I wait for 5 seconds
  Then I should see that the post with title "New Post Title" is deleted
