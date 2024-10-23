Feature: Help function

  Scenario: Verify help button displays game information
    Given I am on the "<location>" 
    When I click the "Help" button
    Then I should see a brief description of the game's purpose
    And I should have an option to continue playing

  Scenario: Clicking Continue returns the player to their location
    Given I am on the "<location>"
    When I click the "Help" button
    And I click the "Continue" button
    Then I should be back at "<location>"

    Examples:
      | location                       |                                                                                                                                                                                     |
      | ------------------------------ |                                                                  
      | outside the Cloud Forest Cafe  |                                                                                          
      | in the Cloud Forest Cafe       | 
      | on an empty street             |                                                                                                       
      | in a crowded bar               |                                                        
      | in the countryside             |                                                                              
      | A guitarist and a sax player   |                                                               
