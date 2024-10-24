Feature: Location Transitions

  Scenario Outline: Navigating between locations
    Given I am at the location "<current_location>"
    When I click on "<action>"
    Then I should be taken to the location "<expected_location>"
    And the location should display the correct image and description
    And I should have the following actions available: "<available_actions>"

    Examples:
      | current_location                      | action                   | expected_location                     | available_actions                                              |
      | ------------------------------------- | ------------------------ | ------------------------------------- | -------------------------------------------------------------- |
      | outside the Cloud Forest Cafe         | Enter the cafe           | in the Cloud Forest Cafe              | Exit the cafe, By an espresso, Wait, Help                      |
      | outside the Cloud Forest Cafe         | Go north                 | on an empty street                    | Wait, Go south, Go east, Help                                  |
      | outside the Cloud Forest Cafe         | Go south                 | in the country-side                   | Wait, Go west, Go north, Help                                  |
      | in the Cloud Forest Cafe              | Exit the cafe            | outside the Cloud Forest Cafe         | Enter the cafe, Wait, Go north, Go south, Help                 |
      | on an empty street                    | Go south                 | outside the Cloud Forest Cafe         | Enter the cafe, Wait, Go north, Go south, Help                 |
      | on an empty street                    | Go east                  | in a crowded bar                      | Wait, Go west, Help                                            |
      | in a crowded bar                      | Go west                  | on an empty street                    | Wait, Go south, Go east, Help                                  |
      | in the country-side                   | Go west                  | A guitarist and a sax player          | Wait, Go east, Help                                            |
      | in the country-side                   | Go north                 | outside the Cloud Forest Cafe         | Enter the cafe, Wait, Go north, Go south, Help                 |
      | A guitarist and a sax player          | Go east                  | in the country-side                   | Wait, Go west, Go north, Help                                  |
