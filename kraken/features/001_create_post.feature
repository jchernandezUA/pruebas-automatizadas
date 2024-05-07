Feature: Gestión de posts en Ghost CMS

@user1 @web
Scenario: Crear post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Given I login as admin in Ghost "create_post" "001"
  And I wait for 1 seconds
  And I wait for 1 seconds
  And I navigate to page "http://localhost:2368/ghost/#/editor/post"
  And I wait for 1 seconds
  And I enter post title "New Post Title"
  And I wait for 1 seconds
  And I enter post descripcion "Descripcion del post"
  And I wait for 1 seconds
  And I click post
  And I wait for 5 seconds
  Then I should see post title as "New Post Title"
  And I should see post description as "Descripcion del post"
