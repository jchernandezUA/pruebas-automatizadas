Feature: Edit profile 

@user1 @web
Scenario: Como usuario quiero cambiar mi nombre de perfil
  Given I login as admin in Ghost "edit_profile" "01"
  When I open profile "edit_profile" "02"
  When I change full name with a requested value "edit_profile" "03"
  Then I verify my name changes "edit_profile" "05"
