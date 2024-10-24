  Feature: wait functionality
  
  Scenario Outline: When I wait my Health decreases depending on the location 
    Given I am at the "<location>"
    And the value of my "Health" is <initial_health>
    When I choose to click "Wait" <click_count> times
    Then the value of my "Health" should be <expected_health>
    And the value of my "Money" should be 10
    And the value of my "Espressos" should be 0
    And the value of my "bag" should be "nothing cool"

    Examples:
      | location                       | initial_health  | click_count  | expected_health  |
      | ------------------------------ | --------------- | ------------ | ---------------- |
      | outside the Cloud Forest Cafe  | 50              | 1            | 45 or 40         |
      | in the Cloud Forest Cafe       | 50              | 2            | 47               |
      | on an empty street             | 50              | 2            | 45               |
      | in a crowded bar               | 50              | 2            | 47               |
      | in the country-side            | 50              | 2            | 45               |
      | A guitarist and a sax player   | 50              | 1            | 45 or 40         |


  Scenario Outline: When I wait at any location, the text under the picture changes
    Given I am at the "<location>"
    And I note the current text under the picture
    When I choose to "Wait"
    Then the text under the picture is different from the initial text
    When I choose to "Wait" again
    Then the text under the picture is different from the previously updated text

    Examples:
      | location                       |
      | ------------------------------ |
      | outside the Cloud Forest Cafe  |
      | in the Cloud Forest Cafe       |
      | on an empty street             |
      | in a crowded bar               |
      | in the country-side            |
      | A guitarist and a sax player   |


 
  Scenario Outline: When I wait at a specific location, the text alternates between two variations
    Given I am at the "<location>"
    When I choose to "Wait"
    Then the text under the picture changes to "<text_variation_1>"
    When I choose to "Wait"
    Then the text under the picture changes to "<text_variation_2>"
    When I choose to "Wait"
    Then the text under the picture changes to "<text_variation_1>"

    Examples:
      | location                      | text_variation_1                                                                               | text_variation_2                                                                               |
      | outside the Cloud Forest Cafe | "You wait. In the sun without Java... Life is hard."                                           | "You wait. The sun is burning your skin. You long for a coffee."                               |
      | on an empty street            | "You feel so tired. Why can't coffee be free and abundant? Where have all the 'spressos gone?" | "You sharpen your ears. You hear people laughing and buzzing to the east? Could it be a cafe?" |
      | in the country-side           | "You wait. You hear music coming from the west. Some kind of festival? Out here?"              | "You stand around for a while... You feel so tired. Clearly not enough coffee."                |

