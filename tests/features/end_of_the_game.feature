Feature: End of the Game

  Scenario: Game ends when health reaches 0
    Given I play until the game ends when health reaches 0
    When I have "Health" at 0
    Then the game should end
    And the central screen should display an image with the caption "Your health has deteriorated too much - you feel almost dead. Find a caffeine-detox clinic?"
    And a "Play again" button should appear


  Scenario: Game ends when espressos reach 5
    Given I play until the game ends when espressos reach 5
    When I have "Espressos" at 5
    Then the game should end
    And the central screen should display an image with the caption "Yes! You feel alive and pumping. Full of caffeine! You feel like... like... Luke Skywalker!"
    And a "Play again" button should appear

 
