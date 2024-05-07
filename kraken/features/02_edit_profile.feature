Feature: Edit profile 

@user1 @web
Scenario: Como usuario quiero cambiar mi nombre de perfil
  Given I login as admin in Ghost "edit_profile" "01"
  When I open profile "edit_profile" "02"
  When I change full name "edit_profile" "03"
  When I click avatar icon "edit_profile" "04"
  Then I verify my name contains "_CH_" "edit_profile" "05"
