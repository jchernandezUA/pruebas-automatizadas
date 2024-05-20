Feature: Edit menu item random

  @user1 @web
  Scenario: As a user I want to edit a menu item
    # Set up
    Given I login as admin in ghost
    # Act
    When I add menu item "$string_1"
    And I edit the last item to "$string_2"
    # Assert
    Then I go to the homepage
    Then I see item menu "$$string_2"
    # Tear Down
    Then I go to admin page
    And I click the settings icon
    And I click the Navigation Customize button
    And I delete item menu
    And I click the Navigation Customize button OK button