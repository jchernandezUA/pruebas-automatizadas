Feature: Add tag to post

@user1 @web
Scenario: Como usuario inicio sesión, agrego un post y le agrego un tag al post
  Given I login as admin in Ghost
  When I add a new post with title "New post"
  And I wait for 2 seconds
  When I return to dashboard
  When I open the recent post
  When I open the post settings
  When I add a new tag named "TAG_NEW"
  Then I verify the post tag "TAG_NEW"
