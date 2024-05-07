Feature: Add tag to post

@user1 @web
Scenario: Como usuario inicio sesión, agrego un post y le agrego un tag al post
  Given I login as admin in Ghost "add_page" "01"
  When I open pages "add_page" "02"
  And I wait for 2 seconds
  When I add a new page with title "NEW PAGE" "add_page" "03"
  And I wait for 2 seconds
  Then I verify the published message "add_page" "04"
