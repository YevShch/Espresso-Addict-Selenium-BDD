Feature: Hipster Bag functionality

  Scenario: Hipster Bag updates when a bonus are added
    Given I am at the location "in a crowded bar"
    And "In the hipsters bag" contains "nothing cool"
    When I receive the bonus "a can of beer"
    Then "In the hipsters bag" should contain "a can of beer"


  Scenario: Hipster Bag resets when a bonus is used
    Given I am at the location "in the Cloud Forest Cafe"
    And "In the hipsters bag" contains "a can of beer"
    When I choose to "Give the beer to the barista"
    Then "In the hipsters bag" should contain "nothing cool"
   
