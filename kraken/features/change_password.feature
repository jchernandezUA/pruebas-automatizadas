Feature: Change password

@user1 @web
Scenario: Como usuario quiero cambiar contraseña
  Given I navigate to page "http://localhost:2368/ghost/"
  When I enter email "josec.hernandezh@gmail.com"
  When I enter password "a1234567890"
  When I click sign in
  When I click avatar icon
  When I click the profile item
  And I wait for 3 seconds
  When I scroll to the element with text "Change password"
  When I click to the element with text "Change password"
  When I enter current password "a1234567890"
  When I enter new password "a1234567890"
  When I enter verify password "a1234567890"
  When I click to the element with text "Change password"
  And I wait for 1 seconds
  Then I validate the text "Updated"
  
