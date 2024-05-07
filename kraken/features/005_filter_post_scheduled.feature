Feature: Gestión de posts en Ghost CMS

@user5 @web
Scenario: programar un post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Given I login as admin in Ghost "scheduled_post" "003"
  And I wait for 1 seconds 
  And I wait for 1 seconds
  And I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 4 seconds
  When I select the post scheduled
  And I wait for 5 seconds
  Then I should see posts filtered by scheduled