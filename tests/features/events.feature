Feature: Events

  Background:
    Given I am at the location "<location>"
    And I see the current picture of the location

  Scenario Outline: Event occurs in a specific location
    When I wait until the event "<event_message>" occurs
    Then the event "<event_message>" should be initialized
    And I should see the picture change
    And I should see the text "<event_text>"
   # Checking if a button is present only for those events where it should be
    And if the event "<event_message>" requires a button "<button_text>", I should see the button "<button_text>"

    Examples:
      | location                     | event_message                   | event_text                                                                                                   | button_text          |
      | in the Cloud Forest Cafe     | The barista is in a dark corner | The barista is in a dark corner phoning a friend...                                                          | Give beer to barista |
      | A guitarist and a sax player | jam with us?                    | The guitarist shouts out to you: 'You look like a hip kid, why don't you come on up and jam with us?'        | Jam with the band    |
      | in a crowded bar             | a can of beer for free          | The bartender offers you a can of beer for free... 'Come on... Get into the groove... You can pay me later!' |                      |

  Scenario Outline: Event only occurs once during the game
    Given I wait until the event "<event_message>" occurs
    And the event "<event_message>" should be initialized
    When I choose to "Wait" repeatedly
    Then I should not see the event message "<event_message>"

    Examples:
      | location                     | event_message                   |
      | in the Cloud Forest Cafe     | The barista is in a dark corner |
      | A guitarist and a sax player | jam with us?                    |
      | in a crowded bar             | a can of beer for free          |

  Scenario Outline: Event does not occur in non-related locations
    Given I am at the "<location>"
    When I choose to "Wait" repeatedly
    Then I should not see the event message "<event_message>"

    Examples:
      | location                      | event_message                   |
      | outside the Cloud Forest Cafe | The barista is in a dark corner |
      | on an empty street            | The barista is in a dark corner |
      | in a crowded bar              | The barista is in a dark corner |
      | in the country-side           | The barista is in a dark corner |
      | A guitarist and a sax player  | The barista is in a dark corner |
      | in the Cloud Forest Cafe      | jam with us?                    |
      | outside the Cloud Forest Cafe | jam with us?                    |
      | on an empty street            | jam with us?                    |
      | in a crowded bar              | jam with us?                    |
      | in the country-side           | jam with us?                    |
      | in the Cloud Forest Cafe      | a can of beer for free          |
      | outside the Cloud Forest Cafe | a can of beer for free          |
      | on an empty street            | a can of beer for free          |
      | in the country-side           | a can of beer for free          |
      | A guitarist and a sax player  | a can of beer for free          |