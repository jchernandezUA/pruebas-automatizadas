Feature: Invite new admin

  @user1 @web
  Scenario: As a user I want to edit member
    # Arrange
    Given I login as admin in Ghost
    # Act
    When I click on member to new admin
    And I wait for 1 seconds
    When I click on setting to invite new admin
    When I click on staff
    And I wait for 1 seconds
    When I click on invite people
    When I enter new email to invite new admin 'test@testadmin.com'
    When I click on administrator
    When I click on send invitation now
    And I wait for 2 seconds
    When I click on back
    When I click on invited
    # Assert
    Then I find the email 'test@testadmin.com'
    Then I go to the homepage
