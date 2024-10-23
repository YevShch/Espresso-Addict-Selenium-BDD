Feature: Health scoring

  Scenario: Health increases when the player drinks espresso
    Given that I am on the location "in the Cloud Forest Cafe"
    Then the value of my "Health" is 50
    And the value of my "Money" is 10
    And the value of my "Espressos" is 0
    And the value of my "In the hipster bag" is "nothing cool"
    When I choose to "Buy an espresso"
    Then the value of my "Health" should be 60
    And the value of my "Money" should be 5
    And the value of my "Espressos" should be 1
    And the value of my "In the hipster bag" should be "nothing cool"



  Scenario Outline: Health decreases when the player waits in a specific location
    Given I am on the "<location>"
    And the value of my "Health" is <initial_health>
    When I choose to click "Wait" <click_count> times
    Then the value of my "Health" should be <expected_health>
    And the value of my "Money" should be 10
    And the value of my "Espressos" should be 0
    And the value of my "In the hipster bag" should be "nothing cool"

    Examples:
      | location                       | initial_health  | click_count  | expected_health  |
      | ------------------------------ | --------------- | ------------ | ---------------- |
      | outside the Cloud Forest Cafe  | 50              | 1            | 45 or 40         |
      | in the Cloud Forest Cafe       | 50              | 2            | 47               |
      | on an empty street             | 50              | 2            | 45               |
      | in a crowded bar               | 50              | 2            | 47               |
      | in the countryside             | 50              | 2            | 45               |
      | A guitarist and a sax player   | 50              | 1            | 45 or 40         |



  Scenario: Game over when health reaches zero
    Given I am at the location "in the Cloud Forest Cafe"
    And the value of my "Health" is 50
    When I choose to "Wait" until my "Health" reaches 0
    Then the game is over
    And the value of my "Money" should be 10
    And my hipster bag should contain "nothing cool"
