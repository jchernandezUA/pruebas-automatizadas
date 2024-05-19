Feature: Add menu item a priori

  @user1 @web
  Scenario Outline: As a user I want to add menu items
    # Set up
    Given I login as admin in ghost
    # Act
    When I click the settings icon
    And I click the Navigation Customize button
    And I enter New item "<custom_new_item>"
    And I click the Navigation Customize button OK button
    # Assert
    Then I go to the homepage
    And I see item menu "<custom_new_item>"
    # Tear Down
    Then I go to admin page
    And I click the settings icon
    And I click the Navigation Customize button
    And I delete item menu
    And I click the Navigation Customize button OK button
    Examples:
      | custom_new_item  |
      | Brand new label  |