Feature: Edit site language a priori

@user1 @web
Scenario Outline: As a user I want to edit the site language
  # Set up
  Given I login as admin in ghost
  # Act
  When I click the settings icon
  And I click the Site language button
  And I edit the site language to "<wrong_lang>"
  And I save the site language
  # Assert
  Then I validate language saving error
  # Tear down
  Then I go to admin page
  And I click the settings icon
  And I click the Site language button
  And I edit the site language to "en"
  And I save the site language

  Examples:
    | wrong_lang         |
    |                    |
