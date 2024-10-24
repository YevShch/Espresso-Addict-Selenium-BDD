Feature: Hipster Bag functionality

  Scenario: Hipster Bag updates when a bonus are added
    Given I am at the location "in a crowded bar"
    And the value of my "bag" is "nothing cool"
    When I receive the bonus "a can of beer"
    Then the value of my "bag" should be "a can of beer"


  Scenario: Hipster Bag resets when a bonus is used
    Given I am at the location "in the Cloud Forest Cafe"
    And the value of my "bag" is "a can of beer"
    When I choose to "Give the beer to the barista"
    Then the value of my "bag" should be "nothing cool"
   
