Feature: Add menu item

  @user1 @web
  Scenario: As a user I want to add menu items
    # Set up
    Given I login as admin in Ghost "add_menu_item" "00"
    # Act
    When I click the settings icon
    And I wait for 1 seconds
    And I take a screenshot "add_menu_item" "01"
    And I click the Navigation Customize button
    And I take a screenshot "add_menu_item" "02"
    And I enter New item "My new Label"
    And I take a screenshot "add_menu_item" "03"
    And I click the Navigation Customize button OK button
    And I take a screenshot "add_menu_item" "04"
    # Assert
    Then I go to the homepage
    And I see item menu "My new Label"
    And I take a screenshot "add_menu_item" "05"
    # Tear Down
    Then I go to admin page
    And I click the settings icon
    And I wait for 1 seconds
    And I click the Navigation Customize button
    And I delete item menu
    And I click the Navigation Customize button OK button
