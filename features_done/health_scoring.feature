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
    And the value of "Health" is "<initial_health>"
    When I choose to click "Wait" "<click_count>" times
    Then the value of "Health" should be "<expected_health>"


    Examples:
      | location                       | initial_health  | click_count  | expected_health  |
      | outside the Cloud Forest Cafe  | 50              | 1            | 45 or 40         |
      | in the Cloud Forest Cafe       | 50              | 2            | 47               |
      | on an empty street             | 50              | 2            | 45               |
      | in a crowded bar               | 50              | 2            | 47               |
      | in the contry-side             | 50              | 2            | 45               |
      | A guitarist and sax player     | 50              | 1            | 45 or 40         |



  Scenario: Game over when health reaches zero
    Given I am at the location "outside the Cloud Forest Cafe"
    And the value of my "Health" is 50
    When I play until the game ends when "Health" reaches 0
    Then the game should end with the message "You health has deteriorated too much – you feel almost dead."
    And the value of my "Health" should be 0
