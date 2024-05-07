Feature: Gestión de posts en Ghost CMS

@user4 @web
Scenario: filtrar un post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Given I login as admin in Ghost "publish_post" "004"
  And I wait for 1 seconds 
  And I wait for 1 seconds
  And I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 4 seconds
  When I select the post filter publish
  And I wait for 5 seconds
  Then I should see posts filtered by publish
