Feature: Gestión de posts en Ghost CMS

@user2 @web
Scenario: Editar un post existente
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Given I login as admin in Ghost "create_edit" "002"
  And I wait for 1 seconds  
  And I wait for 1 seconds
  And I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 4 seconds
  When I select the post with title for edit "New Post Title"
  And I wait for 5 seconds
  And I edit post title edit"Post editado"
  And I wait for 5 seconds
  And I click post edit
  And I wait for 5 seconds
  Then I should see post title edited to "Post editado"