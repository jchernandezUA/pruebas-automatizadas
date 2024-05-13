Feature: Make the site private

  @user1 @web
  Scenario: As a user I want to make the site private
    # Set up
    Given I login as admin in Ghost "site_private" "00"
    # Act
    When I click the settings icon
    And I wait for 1 seconds
    And I take a screenshot "site_private" "01"
    And I click the site private button
    And I take a screenshot "site_private" "02"
    And I switch the site private
    And I take a screenshot "site_private" "03"
    And I set the private password to "12345678"
    And I take a screenshot "site_private" "04"
    And I click Save private setting button
    And I take a screenshot "site_private" "05"
    # Assert
    Then I go to the homepage
    And I see the text "This site is private"
    And I take a screenshot "site_private" "06"
    # Tear down
    Then I go to admin page
    And I click the settings icon
    And I wait for 1 seconds
    And I click the site private button
    And I switch the site private
    And I click Save private setting button
