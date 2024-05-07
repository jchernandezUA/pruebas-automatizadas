Feature: Add tag to post

@user1 @web
Scenario: Como usuario inicio sesión, agrego un post y le agrego un tag al post
  Given I login as admin in Ghost "add_tag_post" "01"
  When I add a new post with title "New post" "add_tag_post" "02"
  And I wait for 2 seconds
  When I return to dashboard "add_tag_post" "03"
  When I open the recent post "add_tag_post" "04"
  When I open the post settings "add_tag_post" "05"
  When I add a new tag named "TAG_NEW" "add_tag_post" "06"
  Then I verify the post tag "TAG_NEW" "add_tag_post" "07"
