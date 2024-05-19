Feature: Edit menu item a priori

  @user1 @web
  Scenario Outline: As a user I want to edit a menu item
    # Set up
    Given I login as admin in ghost
    # Act
    When I add menu item "<custom_item>"
    And I edit the last item to "<custom_edited_item>"
    # Assert
    Then I go to the homepage
    Then I see item menu "<custom_edited_item>"
    # Tear Down
    Then I go to admin page
    And I click the settings icon
    And I click the Navigation Customize button
    And I delete item menu
    And I click the Navigation Customize button OK button
    Examples:
      | custom_item | custom_edited_item |
      | lorem ipsum | dolor sit amet     |