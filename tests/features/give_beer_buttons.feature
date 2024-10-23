Feature: "Give beer to barista" button functionality
visibility based on events and inventory

  Background: Player has a can of beer
    Given I am at the location "in a crowded bar"
    And I wait until I receive the bonus "a can of beer"
    And the value of my "In the hipster bag" is "a can of beer"

  Scenario: "Give beer to barista" button is not visible until the event "The barista is in a dark corner" occurs
    When I move to the location "in the Cloud Forest Cafe"
    Then I should not see a button "Give beer to barista"

  Scenario: "Give beer to barista" button appears only when the event "The barista is in a dark corner" occurs and you have a bonus "a can of beer"
    When I move to the location "in the Cloud Forest Cafe"
    And I wait until the event "The barista is in a dark corner" occurs
    Then I should see a button "Give beer to barista"

  Scenario: When I click "Give beer to barista", scores should update correctly
    When I move to the location "in the Cloud Forest Cafe"
    And I wait until the event "The barista is in a dark corner" occurs
    And the value of my "Health" is 50
    And the value of my "Money" is 10
    And the value of my "Espressos" is 0
    And the value of my "In the hipster bag" is "a can of beer"
    When I click to "Give beer to barista"
    Then the value of my "Health" should be 70
    And the value of my "Money" should be 10
    And the value of my "Espressos" should be 2
    And the value of my "In the hipster bag" should be "nothing cool"

  Scenario: "Give beer to barista" button should disappear after being clicked
    When I move to the location "in the Cloud Forest Cafe"
    And I wait until the event "The barista is in a dark corner" occurs
    And I should see a button "Give beer to barista"
    And I click to "Give beer to barista"
    Then I should not see a button "Give beer to barista"


  Background: Player has no beer
    Given I am at the location "in the Cloud Forest Cafe"
    And the value of my "In the hipster bag" is "nothing cool"

  Scenario: "Give beer to barista" button is not visible when no beer is available
    Then I should not see a button "Give beer to barista"

  Scenario: "Give beer to barista" button is not visible when no beer is available and the event "The barista is in a dark corner" occurs
    When I wait until the event "The barista is in a dark corner" occurs
    Then I should not see a button "Give beer to barista"
