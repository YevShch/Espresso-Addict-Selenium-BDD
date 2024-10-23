# Testing Plan for "espresso-addict"
## Functional Areas to Test
### 1. Game Initialization
Verify that at the start of the game, the scoreboard shows the following initial values:
- Health: 50, Money: 10, Espressos: 0, In your hipster bag: "nothing cool"
- The starting location should be "outside Cloud Forest Cafe."
- The footer should display action buttons: "Enter the cafe", "Wait", "Go north", "Go south", "Help."
- The “Full screen” button should be visible in the top-right corner.
### 2. Page Layout
- Verify that each game page contains:
- Header with the scoreboard (Health, Money, Espressos, Bag).
- Central screen with location image and description.
- Footer with action buttons (e.g., "Wait", "Move", "Help").
- Full screen button in the top-right corner of every location.
### 3. Scoreboard Functionality
- **Health: Ensure Health updates correctly when:**
     -The player drinks espresso (+10 Health).
     -The player waits (loses Health by a specified amount depending on location).
     -Health hits 0, triggering the game over scenario.
- **Money: Ensure Money decreases when:**
     -Buying espresso (-5 Money per cup).
     -Bonuses add Money (e.g., the event from “Jam with the band” gives +5 Money).
     -Espressos: Ensure the counter increases properly:
     -+1 for each espresso consumed.
- **Test what happens when the counter hits 5 (game should end)**.
- **In Your Hipster Bag: Ensure it displays correct items:**
     - Updates when items are added (e.g., "a can of beer").
     - Resets when items are used (like giving the beer to the barista).
### 4. Location Transitions
- Test all location-based navigation and transitions:
- Ensure each button for moving (e.g., "Go north", "Go west") takes you to the correct location.
- Each new location should load with the correct image, description, and actions.
### 5. Action Buttons
- **Ensure all buttons in the footer perform their intended actions:**
     - Wait: Deduct Health and display alternating text.
     - Move: Navigate between locations correctly.
     - Help: Display the help screen, then allow the player to continue back.
     - Buy an espresso: Decrease Money, increase Health and Espressos.
- **Test button visibility for context-specific actions, like:**
       - "Give beer to barista" appears only when applicable.
## Additional Scenarios to Test
### 1. Event Triggering & Handling
- Random Event Timing: Ensure all special events (like “barista in a dark corner,” “jam with the band,” “free beer offer”) are triggered by waiting, based on predefined conditions.
- Event Interactions: Verify correct bonuses for interacting with events, such as giving beer to the barista (+20 Health, +2 Espressos).
### 2. Bag Content Updates
- Ensure “In your hipster bag” updates correctly after receiving or using items, like acquiring and then using “a can of beer.”
### 3. Limits for Health, Money, and Espressos
- Health: Ensure Health cannot exceed a certain limit (if any) and that the game ends when it reaches 0.
- Money: Test behavior when Money reaches 0 (the player shouldn't be able to buy espresso).
- Espressos: Ensure the game ends after consuming 5 espressos, and no further cups can be added.
### 4. Game Restart
- Ensure that clicking the “Play again” button properly resets the game state (Health, Money, Espressos, Bag) and starts the game from the correct initial location.
### 5. Full Screen Mode
- Ensure the “Full screen” button toggles the view correctly without affecting gameplay or layout.
### 6. Wait Text Alternation
- Verify that the text displayed after clicking "Wait" alternates as described in each location, providing variety in player feedback.
## Edge Cases
### 1. Rapid Button Clicks
- Test rapid, repeated clicks of action buttons (like "Wait" or "Buy espresso"). Ensure the game handles these inputs smoothly without errors.
### 2. Negative Values
- Health and Money: Ensure neither can go negative. Health should trigger game over when it hits 0, and Money should prevent buying if the player can't afford it.
