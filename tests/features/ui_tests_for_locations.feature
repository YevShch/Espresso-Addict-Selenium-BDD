Feature: Verify header, central screen, and footer are displayed correctly in different locations

  Scenario Outline: Verify header, central screen, and footer for different locations
    Given the game is started
    When I am on the "<location>"
    Then I should see a header with the scoreboard
    And I should see the central screen with the location image and description
      | description                                        |
      | <description>                                      |
    And I should see a footer with action buttons
      | buttons                                            |
      | <buttons>                                          |
    And I should see the "Full screen" option in the top-right corner

  Examples:
    | location                     | description                                                                              | buttons                                     |
    |------------------------------|------------------------------------------------------------------------------------------|---------------------------------------------|
    | outside the Cloud Forest Cafe| You are standing outside the Cloud Forest Cafe.                                          | Enter the cafe, Wait, Go north,            |
    |                              | The sun is shining.                                                                      | Go south, Help                             |
    | in the Cloud Forest Cafe     | You are in the Cloud Forest Cafe. People are reading, talking, and drinking coffee.      | Exit the cafe, Buy an espresso, Wait, Help |
    |                              | Mmm... Coffee... The barista says: 'How about an espresso? It's only $5.'                |                                             |
    | on an empty street           | You are on an empty street. Not much action around here.                                 | Wait, Go south, Go east, Help              |
    | in a crowded bar             | You are in a crowded bar where everyone is friendly.                                     | Wait, Go west, Help                         |
    |                              | But no coffee in sight. Everyone's drinking beer.                                        |                                             |
    | in the countryside           | You walk and walk. Now you're out in the countryside. Just great. No coffee here…        | Wait, Go west, Go north, Help               |
    | A guitarist and a sax player | A guitarist and a sax player make some funky noise.                                      | Wait, Go east, Help                        |
    |                              | The guitarist doesn't sing too well though.                                              |                                             |



