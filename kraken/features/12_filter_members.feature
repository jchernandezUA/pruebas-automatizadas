Feature: Filter members

  @user1 @web
  Scenario: As a user I want to new member
    # Arrange
    Given I login as admin in Ghost
    # Act
    When I click on member in filter
    And I wait for 1 seconds
    When I click in filter
    When I click on name
    When I click on label
    When I click on contain
    When I want to filter by name that contain "test"
    And I wait for 1 seconds
    When I click on apply filters
    # Assert
    Then I find the member that have "test" in the name
    Then I go to the homepage
