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
    And the value of my "In the hipster bag" is "nothing cool"
    When I wait until I receive the bonus "a can of beer" 
    Then the value of my "In the hipster bag" should be "a can of beer"
    And the value of my "Money" should be 10
  
    

