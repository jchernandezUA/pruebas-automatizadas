Feature: Invite member 

  @user1 @web
  Scenario: As a user I want to new member
    # Arrange
    Given I login as admin in Ghost "invite_member" "01"
    # Act
    And I wait for 5 seconds
    When I am on the members page, create a member "invite_member" "01"
    And I wait for 1 seconds
    # Assert
    Then the member name should be "Miembro para creado test" "invite_member" "01"
    Then I delete member that has been create