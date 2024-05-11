Feature: Filter members

  @user1 @web
  Scenario: As a user I want to filter member
    # Arrange
    Given I login as admin in Ghost "filter_member" "01"
    Given I am on the members page, create a member that I want to filter
    And I wait for 2 seconds
    # Act
    And I wait for 2 seconds
    When I proceed to filter a member that dont exist "filter_member" "02"
    And I wait for 2 seconds
    # Assert
    Then I find the member that dont exist "filter_member" "03"
    Then I delete member that has been create to filter