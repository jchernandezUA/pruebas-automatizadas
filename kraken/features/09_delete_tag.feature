Feature: Delete tag to post

@user1 @web
Scenario: Como usuario inicio sesión agrego un post, le agrego un tag al post y borro el tag
  Given I login as admin in Ghost "delete_tag_post" "01"
  When I add a new post with title "New post" "delete_tag_post" "02"
  And I wait for 2 seconds
  When I return to dashboard "delete_tag_post" "03"
  When I open the recent post "delete_tag_post" "04"
  When I open the post settings "delete_tag_post" "05"
  When I add a new tag named "TAG_NEW" "delete_tag_post" "06"
  And I wait for 10 seconds
  When I open the recent post "delete_tag_post" "07"
  And I wait for 10 seconds
  When I open the post settings "delete_tag_post" "08"
  When I erase the tag "delete_tag_post" "09"
  Then I verify that there is no post tag "TAG_NEW" "delete_tag_post" "10"