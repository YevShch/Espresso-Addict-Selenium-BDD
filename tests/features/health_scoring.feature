Feature: Health scoring

  Scenario: Health increases when the player drinks espresso
    Given I am at the location "in the Cloud Forest Cafe"
    Then the value of my "Health" is 50
    And the value of my "Espressos" is 0
    When I click the "Buy an espresso" button
    Then the value of my "Health" should be 60
    And the value of my "Espressos" should be 1

 

  Scenario Outline: Health decreases based on location when the player waits
    Given I am at the location "<location>"
    And I know the current value of my "Health"
    When I choose to click "Wait" 2 times
    Then the value of "Health" should "<health_change>"

    Examples:
      | location                      | health_change             |
      | outside the Cloud Forest Cafe | decrease                  |
      | in the Cloud Forest Cafe      | decrease or stay the same |
      | on an empty street            | decrease                  |
      | in a crowded bar              | decrease or stay the same |
      | in the contry-side            | decrease                  |
      | A guitarist and sax player    | decrease                  |


  Scenario: Game over when health reaches zero
    Given I am at the location "outside the Cloud Forest Cafe"
    And the value of my "Health" is 50
    When I play until the game ends when "Health" reaches 0
    Then the game should end with the message "You health has deteriorated too much – you feel almost dead."
    And the value of my "Health" should be 0
