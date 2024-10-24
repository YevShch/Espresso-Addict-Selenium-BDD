Feature: "Play again" button functionality

  Scenario: Verify "Play again" button functionality after health reaches 0
    Given that I have started the game by navigating to "http://localhost:3000"
    And I play until the game ends when health reaches 0
    When I click the "Play again" button
    Then I should be taken back to the start of the game
    And the scoreboard should show "Health" as 50
    And the scoreboard should show "Money" as 10
    And the scoreboard should show "Espressos" as 0
    And the scoreboard should show "In your hipster bag" as "nothing cool"

 
  Scenario: Verify "Play again" button functionality after espressos reach 5
    Given that I have started the game by navigating to "http://localhost:3000"
    And I play until the game ends when espressos reach 5
    When I click the "Play again" button
    Then I should be taken back to the start of the game
    And the scoreboard should show "Health" as 50
    And the scoreboard should show "Money" as 10
    And the scoreboard should show "Espressos" as 0
    And the scoreboard should show "In your hipster bag" as "nothing cool"
