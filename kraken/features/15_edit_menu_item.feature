Feature: Edit menu item

  @user1 @web
  Scenario: As a user I want to edit a menu item
    # Set up
    Given I login as admin in Ghost "edit_menu_item" "00"
    # Act
    When I add menu item "My new item"
    And I edit the last item to "V2"
    # Assert
    Then I go to the homepage
    Then I see item menu "My new itemV2"
    # Tear Down
    Then I go to admin page
    And I click the settings icon
    And I click the Navigation Customize button
    And I delete item menu
    And I click the Navigation Customize button OK button