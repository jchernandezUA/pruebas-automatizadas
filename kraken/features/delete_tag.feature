Feature: Delete tag to post

@user1 @web
Scenario: Como usuario inicio sesión agrego un post, le agrego un tag al post y borro el tag
  Given I login as admin in Ghost
  When I add a new post with title "New post"
  And I wait for 2 seconds
  When I return to dashboard
  When I open the recent post
  When I open the post settings
  When I add a new tag named "TAG_NEW"
  When I open the recent post
  And I wait for 2 seconds
  When I open the post settings
  When I erase the tag
  Then I verify that there is no post tag "TAG_NEW"