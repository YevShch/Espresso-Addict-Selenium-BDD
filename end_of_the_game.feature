Feature: End of the Game

  Scenario: Player loses the gae when health reaches 0
    Given I play until the game ends when health reaches 0
    When the value of my "Health" is 0
    Then the game should end
    And the central screen should display an image with the caption "Your health has deteriorated too much - you feel almost dead. Find a caffeine-detox clinic?"
    And I should see the button "Play again"


  Scenario: Player wins the game when espressos reach 5
    Given I play until the game ends when espressos reach 5
    When the value of my "Espressos" is 5
    Then the game should end
    And the central screen should display an image with the caption "Yes! You feel alive and pumping. Full of caffeine! You feel like... like... Luke Skywalker!"
    And I should see the button "Play again"
