 Feature: Buy an espresso button 
  
  Scenario: Buy an espresso button decreases Money and increases Health and Espressos
    Given I am at the location "in the Cloud Forest Cafe"
    And the value of my "Health" is 50
    And the value of my "Money" is 10
    And the value of my "Espressos" is 0
    And the value of my "In the hipster bag" is "nothing cool"
    When I click the "Buy an espresso" button
    Then the value of my "Money" should be 5
    And the value of my "Health" should be 60
    And the value of my "Espressos" should be 1
    And the value of my "In the hipster bag" should be "nothing cool"
