Feature: Edit profile 

@user1 @web
Scenario: Como usuario quiero cambiar mi nombre de perfil
  Given I login as admin in Ghost
  When I open profile
  When I change full name
  When I click avatar icon
  Then I verify my name contains "_CH_"
