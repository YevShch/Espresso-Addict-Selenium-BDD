Feature: Full screen option

  Scenario: Verify full screen option toggles correctly
    Given I am on any game page
    When I click the "Full screen" option
    Then the game should switch to full screen mode
    When I press the "ESC" key on my computer
    Then the game should exit full screen mode
