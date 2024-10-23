Feature: Money scoring

  Scenario: Value of Money decreases when buying espresso
    Given I am at the location "in the Cloud Forest Cafe"
    And the value of my "Money" is 10
    When I choose to "Buy an espresso"
    Then the value of my "Money" should be 5
   

  Scenario: Value of Money increases when receiving a bonus "Jam with the band"
    Given I am at the location "A guitarist and a sax player"
    And the value of my "Money" is 10
    When I receive the bonus "Jam with the band"
    Then the value of my "Money" should be 15


  Scenario: Value of Money do not changes when receiving a bonus "a can of beer"
    Given I am at the location " in a crowded bar"
    And the value of my "Money" is 10
    And "In the hipsters bag" contains "nothing cool"
    When I receive the bonus "Jam with the band"
    Then "In the hipsters bag" contains "a can of beer"
    And the value of my "Money" should be 10
  

  Scenario: Money should prevent buying if the player can't afford it
    Given I am at the location "in the Cloud Forest Cafe"
    And the value of my "Money" is 0
    And the value of my "Espressos" should be 2
    When I choose to "Buy an espresso" 
    Then the purchase should be denied
    And the value of my "Money" should be 0
    And the value of my "Espressos" should be 2
    

