Feature: Edit site description

  @user1 @web
  Scenario: As a user I want to edit the site description
    # Set up
    Given I login as admin in Ghost "edit_site_desc" "00"
    # Act
    When I click the settings icon
    And I wait for 1 seconds
    And I take a screenshot "edit_site_desc" "01"
    And I click the Title and Description button
    And I take a screenshot "edit_site_desc" "02"
    And I edit the site description to "Smile every day"
    And I take a screenshot "edit_site_desc" "03"
    And I save the site description
    And I take a screenshot "edit_site_desc" "04"
    # Assert
    Then I go to the homepage
    And I see description contains "Smile every day"
    And I take a screenshot "edit_site_desc" "04"
    # Tear down
    Then I go to admin page
    And I click the settings icon
    And I wait for 1 seconds
    And I click the Title and Description button
    And I edit the site description to "Thoughts, stories and ideas."
    And I save the site description
