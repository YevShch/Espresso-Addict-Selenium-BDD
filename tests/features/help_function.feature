Feature: Help function

  Scenario: Verify help button displays game information
    Given I am on the "<location>"
    When I click the "Help" button
    Then I should see a brief description of the game's purpose
    And I should have an option to continue playing

// Add background and scenario outline or common steps how to navigate to all game pages
    Examples:
      | location                       |                                                                                                                                                                                     |
      | ------------------------------ |                                                                  
      | outside the Cloud Forest Cafe  |                                                                                          
      | in the Cloud Forest Cafe       | 
      | on an empty street             |                                                                                                       
      | in a crowded bar               |                                                        
      | in the countryside             |                                                                              
      | A guitarist and a sax player   |                                                               
