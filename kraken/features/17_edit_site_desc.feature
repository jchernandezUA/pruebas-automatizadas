Feature: Edit site description

  @user1 @web
  Scenario: As a user I want to edit the site description
    # Set up
    Given I login as admin in ghost
    # Act
    When I click the settings icon
    And I click the Title and Description button
    And I edit the site description to "Smile every day"
    And I save the site description
    # Assert
    Then I go to the homepage
    And I see description contains "Smile every day"
    # Tear down
    Then I go to admin page
    And I click the settings icon
    And I click the Title and Description button
    And I edit the site description to "Thoughts, stories and ideas."
    And I save the site description
