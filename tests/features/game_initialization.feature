Feature: Game initialization

  Scenario: Verify initial scoreboard values
    Given I am at the start of the game
    When the game loads
    Then the scoreboard should show "Health" as 50
    And the scoreboard should show "Money" as 10
    And the scoreboard should show "Espressos" as 0
    And the scoreboard should show "In your hipster bag" as "nothing cool"

 Scenario: Verify starting location
    Given I am at the start of the game
    When the game loads
    Then I should be at the location "outside Cloud Forest Cafe"
    And I should see the text "You are standing outside the Cloud Forest Cafe. The sun is shining."

 Scenario: Verify available actions in the starting location
    Given I am at the start of the game
    When the game loads
    Then I should see the following action buttons:
      | Enter the cafe |
      | Go north       |
      | Go south       |
      | Wait           |
      | Help           |
