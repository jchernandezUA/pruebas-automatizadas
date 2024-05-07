Feature: Change password

@user1 @web
Scenario: Como usuario quiero cambiar contraseña
  Given I login as admin in Ghost "change_password" "01"
  When I open profile "change_password" "02"
  And I wait for 3 seconds
  When I change the password "change_password" "03"
  And I wait for 1 seconds
  Then I validate the password changed "change_password" "04"
  
