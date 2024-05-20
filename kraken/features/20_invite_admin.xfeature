Feature: Invite new admin

  @user1 @web
  Scenario: As a user I want to invite admin
    # Arrange
    Given I login as admin in Ghost "inviteadmin" "01"
    Given I am admin, i want to invite new admin
    # Act
    And I wait for 2 seconds
    When I proceed to invite a new admin "invite_admin" "02"
    And I wait for 5 seconds
    # Assert
    Then I find the email "nuevo@miembro.com" "invitea:dmin" "03"
    And I wait for 2 seconds
    Then I delete member invited
