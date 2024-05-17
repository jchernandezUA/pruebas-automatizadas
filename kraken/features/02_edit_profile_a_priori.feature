Feature: Edit profile

@user1 @web
Scenario: Como usuario quiero cambiar mi nombre de perfil
  Given I login as admin in Ghost "edit_profile" "01"
  When I open profile "edit_profile" "02"
  When I change profile with "<full_name>" "<location>" "edit_profile" "03"
  Then I verify my name contains "<full_name>" "edit_profile" "05"
  
  Examples:
    |full_name|location|
    |EU|Säffle|
    |NA|Cergy-Pontoise|
    |AF|Šibenik|
    |AS|Castelo de Vide|
    |NA|Stockholm|


#https://api.mockaroo.com/api/3d38ded0?count=5&key=86bc46c0
