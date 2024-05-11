Feature: Delete member 

  @user1 @web
  Scenario: As a user I want to delete member
    # Arrange
    Given I login as admin in Ghost "delete_member" "01"
    And I wait for 2 seconds
    Given I am on the members page, create a member that I want to delete
    # Act
    And I wait for 2 seconds
    When I proceed to delete a member "delete_member" "03"
    And I wait for 1 seconds
    # Assert
    Then the member should be deleted "memberDelete" "delete_member" "04"


