Feature: "Jam with the band" button functionality

  Background: Waiting for the event "jam with the band"
    Given I am at the location "A guitarist and a sax player"
    And I should not see a button "Jam with the band"
    When I wait until the event "jam with us?" occurs

  Scenario: "Jam with the band" button is visible after event "jam with the band" occurs
    Then the button "Jam with the band" should be visible

  Scenario: "Jam with the band" button should disappear after being clicked
    When I click the "Jam with the band" button
    Then I should not see a button "Jam with the band"

  Scenario: Clicking "Jam with the band" increases Money by 5
    Given the value of my "Money" is 10
    When I click the "Jam with the band" button
    Then the value of my "Money" should be 15