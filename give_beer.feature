Feature: "Give beer to barista" button functionality

  Scenario: "Give beer to barista" button hidden if I have no beer
    Given I am at the location "in the Cloud Forest Cafe"
    And the value of my "bag" is "nothing cool"
    Then I should not see a button "Give beer to barista"

  Scenario: "Give beer to barista" button hidden without beer, even when barista event happens
    Given I am at the location "in the Cloud Forest Cafe"
    And the value of my "bag" is "nothing cool"
    When I wait until the event "The barista is in a dark corner" occurs
    Then I should not see a button "Give beer to barista"


  Background: Player has a can of beer
    Given I am at the location "in a crowded bar"
    And I wait until I receive the bonus "a can of beer"
    And the value of my "bag" is "a can of beer"

  Scenario: "Give beer to barista" button is not visible until the event with the barista occurs
    When I move to the location "in the Cloud Forest Cafe"
    Then the button "Give beer to barista" should be visible

  Scenario:"Give beer to barista" button is visible when player has a beer and the event with the barista has occurred.
    When I move to the location "in the Cloud Forest Cafe"
    And I wait until the event "The barista is in a dark corner" occurs
    Then the button "Give beer to barista" should be visible

  Scenario: When I give beer to the barista, scores should update correctly
    When I move to the location "in the Cloud Forest Cafe"
    And I wait until the event "The barista is in a dark corner" occurs
    And the value of my "Health" is 50
    And the value of my "Money" is 10
    And the value of my "Espressos" is 0
    And the value of my "bag" is "a can of beer"
    When I click the "Give beer to barista" button
    Then the value of my "Health" should be 70
    And the value of my "Money" should be 10
    And the value of my "Espressos" should be 2
    And the value of my "bag" should be "nothing cool"

  Scenario: "Give beer to barista" button should disappear after being clicked
    When I move to the location "in the Cloud Forest Cafe"
    And I wait until the event "The barista is in a dark corner" occurs
    And the button "Give beer to barista" should be visible
    And I click the "Give beer to barista" button
    Then I should not see a button "Give beer to barista"


