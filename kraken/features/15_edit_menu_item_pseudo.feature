Feature: Edit menu item pseudo

  @user1 @web
  Scenario: As a user I want to edit a menu item
    # Set up
    Given I login as admin in ghost
    # Act
    When I add menu item with request value
    And I edit the last item with request value
    # Assert
    Then I go to the homepage
    Then I verify my edited item menu is there
    # Tear Down
    Then I go to admin page
    And I click the settings icon
    And I click the Navigation Customize button
    And I delete item menu
    And I click the Navigation Customize button OK button