Feature: Edit site language

  @user1 @web
  Scenario: As a user I want to edit the site language
    # Set up
    Given I login as admin in Ghost "edit_site_lang" "00"
    # Act
    When I click the settings icon
    And I wait for 1 seconds
    And I take a screenshot "edit_site_lang" "01"
    And I click the Site language button
    And I take a screenshot "edit_site_lang" "02"
    And I edit the site language to "es"
    And I take a screenshot "edit_site_lang" "03"
    And I save the site language
    And I take a screenshot "edit_site_lang" "04"
    # Assert
    Then I go to the homepage
    And I see site language is "es"
    And I take a screenshot "edit_site_lang" "05"
    # Tear down
    Then I go to admin page
    And I click the settings icon
    And I wait for 1 seconds
    And I click the Site language button
    And I edit the site language to "en"
    And I save the site language
