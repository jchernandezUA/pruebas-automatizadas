Feature: Edit member 

  @user1 @web
  Scenario: As a user I want to edit member
    # Arrange
    Given I login as admin in Ghost "edit_member" "01"
    And I wait for 5 seconds
    When I am on the members page, create a member that I want to edit
    # Act
    And I wait for 5 seconds
    When I proceed to edit a member "edit_member" "02"
    And I wait for 1 seconds
    # Assert
    Then the member edit name should be "Miembro creado y edita para test" "edit_member" "03"
    Then I delete member that has been edit

