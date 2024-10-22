## Exploratory Testing Description of the Game "espresso-addict"
I explored the game because I need to test it using Selenium, but there are no set criteria or user stories for this game. I’m also not allowed to look at the backend code. The game I tested is about a hipster who is a caffeine addict and needs to drink 5 cups of coffee a day to survive. A cup of coffee costs $5, but he only has $10 at the start of the game. To reach the goal of drinking five cups, he needs to move through different locations and wait for events that might give bonuses for acquiring cups of espresso. Waiting reduces health points.

### Page Layout:
Each game page has a standard layout, consisting of a header, a central screen with the location, and a footer with buttons. There is also a “Full screen” option in the top-right corner. **The header** shows a scoreboard with health - "Health", money - "Money", cups of espresso - "Espressos", and the contents of your hipster bag - "In your hipster bag."

**The central screen** shows an image of the location with a description underneath.
**The footer** contains several buttons for possible actions: moving to another location (each location has its own directions, usually 1-2 options like "go west", "go south", "go north", "go east"), a "wait" button, and a "help" button, which briefly explains the game’s purpose.

### Game Start:
At the beginning of the game, a scoreboard is displayed with:

- Health - "Health" at 50,
- Money - "Money" at 10,
- Cups of espresso - "Espressos" at 0,
- Contents of the bag - "In your hipster bag" showing "nothing cool."
- The starting location is "outside Cloud Forest Cafe."

### Game Rules
- If the "Health" level reaches 0 and "Espressos" cups are fewer than 5, the hipster dies, and the game ends.
- If the number of consumed "Espressos" reaches 5, the game ends.

### Scoring System
- For every espresso bought/received, 10 points are added to "Health," and 1 cup is added to "Espressos."
- When buying an espresso, 5 points are deducted from "Money."
- If an espresso is received as a bonus, no money is deducted.

### End of the Game
1. If "Health" reaches 0 and "Espressos" is less than 5, the hipster dies. The game ends, and the central screen displays an image with the caption:
  "Your health has deteriorated too much – you feel almost dead. Find a caffeine-detox clinic?"
  A "Play again" button appears, and the "Health" status shows 0.

2. If the number of consumed "Espressos" reaches 5, the game ends. The screen shows an image with the caption:
  "Yes! You feel alive and pumping. Full of caffeine! You feel like... like... Luke Skywalker!"
  A "Play again" button also appears.


### Locations:
There are 7 locations in total in the game:

- "outside the Cloud Forest Cafe",
- "in the Cloud Forest Cafe",
- "on an empty street",
- "in a crowded bar",
- "in the country-side",
- "A guitarist and a sax player",
- "Help".

### Events:
All events occur only once throughout the game.

- "You feel alive and pumping"
- "You feel almost dead"
- "The bartender offers you a can of beer for free..."
- "Come on up and jam with us?"
- "The barista is in a dark corner"

### Locations:
#### Starting Location: “outside the Cloud Forest Cafe”
**Header:** The scoreboard shows Health, Money, Espressos, and “In your hipster bag”.
**Central screen:** The image displays the cafe with the caption “You are standing outside the Cloud Forest Cafe. The sun is shining.”
**Footer: Buttons:** “Enter the cafe”, “Wait”, “Go north”, “Go south”, “Help”.
In the top-right corner, there is the “Full screen” option.
**Possible actions in this location:**
- Clicking “Enter the cafe” takes you to the location “in the Cloud Forest Cafe”.
- Clicking “Go north” takes you to the location "on an empty street".
- Clicking “Help” takes you to the “Help” location.
- Clicking “Go south” takes you to the location "in the country-side".
- Clicking “Wait” decreases Health by 5 points every second click.
- When clicking “Wait”, the text under the image alternates between: “You wait. In the sun without Java... Life is hard.” and “You wait. The sun is burning your skin. You long for a coffee.”

#### Location: “in the Cloud Forest Cafe”
**Header:** Displays Health, Money, Espressos, and “In your hipster bag”.
**Central screen:** The image shows the cafe with the caption “You are in the Cloud Forest Cafe. People are reading, talking, and drinking coffee. Mmm... Coffee... The barista says: 'How about an espresso? It's only $5.'"
**Footer:** Buttons: “Exit the cafe”, “Buy an espresso”, “Wait”, “Help”.
*“Full screen”* option is available in the top-right corner.
**Possible actions in this location:**
- Clicking “Exit the cafe” takes you back to the location "outside the Cloud Forest Cafe."

- Clicking “Buy an espresso” increases Health by 10, decreases Money by 5, and increases Espressos by 1.

- Clicking “Help” takes you to the “Help” location.

- Clicking “Wait” decreases Health by 3 points every second click.

- Clicking “Wait” can trigger the event “The barista is in a dark corner.” When this happens, the image changes, and the text under it becomes:
  “The barista is in a dark corner phoning a friend. You overhear parts of the conversation: 'I'm tired of pushing coffee. I just want a beer, but I'm stuck here for like 5 more hours... Man, I tell you if someone would just bring me a beer...'"

- If the event “The barista is in a dark corner” is triggered and there is “a can of beer” in “In your hipster bag”, the button “Give beer to barista” will appear in the footer.

- If the event has already occurred, the text under the image will alternate between:
  “You wait. The barista looks at you.” and
  “You wait. The barista says: You look like you could use some Java...”

- Clicking “Give beer to barista” increases Health by 20, Espressos by 2, and changes the contents of “In your hipster bag” to “nothing cool”, without affecting Money.

#### Location: "in the country-side"
**Header:** Displays Health, Money, Espressos, and “In your hipster bag”.
**Central screen:** The image shows the countryside with the caption: “You walk and walk. Now you're out in the countryside. Just great. No coffee here…”
**Footer:** Buttons: “Wait”, “Go west”, “Go north”, “Help”.
*In the top-right corner*, there is the “Full screen” option.
**Possible actions in this location:**
- Clicking “Go west” takes you to the location “A guitarist and a sax player.”
- Clicking “Go north” returns you to the location "outside the Cloud Forest Cafe."
- Clicking “Help” takes you to the “Help” location.
- Clicking “Wait” decreases Health by 5 points every second click.
- When clicking “Wait”, the text under the image alternates between:
  “You wait. You hear music coming from the west. Some kind of festival? Out here?”
  and
  “You stand around for a while... You feel so tired. Clearly not enough coffee.”

#### Location: “A guitarist and a sax player”
**Header:** Displays Health, Money, Espressos, and “In your hipster bag.”
**Central screen:** The image shows two musicians with the caption: “A guitarist and a sax player make some funky noise. The guitarist doesn't sing too well though.”
**Footer:** Buttons: “Wait”, “Go east”, “Help”.
*In the top-right corner*, there is the “Full screen” option.
**Possible actions in this location:**
- Clicking “Go east” returns you to the location "in the country-side."

- Clicking “Help” takes you to the “Help” location.

- Clicking “Wait” decreases Health alternately by 5 and 10 points with each click. It alternates: if 5 points are deducted first, the next deduction will be 10, and vice versa.

- Clicking “Wait” can trigger the event “The guitarist shouts out to you: 'You look like a hip kid, why don't you come on up and jam with us?'” and the button “Jam with the band” will appear in the footer.

- Clicking “Jam with the band” changes the text under the image to:
  “You enter the stage and sing 'Oh lord won't you buy me... An Espresso machine.' Someone in the audience throws you a fiver.”
  This action increases Money by 5, while Health, Espressos, and “In your hipster bag” remain unchanged.

- If you continue to click “Wait,” the text alternates between:
  “You wait. Music without espresso... Life is hard.”
  and
  “You wait. The music is getting boring. You long for a coffee.”

#### Location: "empty street"
**Header:** Displays Health, Money, Espressos, and “In your hipster bag.”
**Central screen:** The image shows an empty street with the caption:
“You are on an empty street. Not much action around here.”
**Footer:** Buttons: “Wait”, “Go south”, “Go east”, “Help”.
*In the top-right corner*, there is the “Full screen” option.
**Possible actions in this location:**
- Clicking “Wait” alternates the text under the image between:
  “You feel so tired. Why can't coffee be free and abundant? Where have all the 'spressos gone?”
  and
  “You sharpen your ears. You hear people laughing and buzzing to the east? Could it be a cafe?”
- Clicking “Go south” returns you to the location "outside the Cloud Forest Cafe."
- Clicking “Go east” takes you to the location "in a crowded bar."
- Clicking “Help” takes you to the “Help” location.

#### Location: "in a crowded bar"
**Header:** Displays Health, Money, Espressos, and “In your hipster bag.”
**Central screen:** The image shows a busy bar with the caption:
“You are in a crowded bar where everyone is friendly. But no coffee in sight. Everyone's drinking beer.”
**Footer: Buttons:** “Wait”, “Go west”, “Help”.
*In the top-right corner*, there is the “Full screen” option.
**Possible actions in this location:**
- Clicking “Go west” takes you back to the location "empty street."

- Clicking “Help” takes you to the “Help” location.

- Clicking “Wait” changes the text under the image to:
  “You wait. Beer, beer, beer... You don't care...”

- Clicking “Wait” can trigger the event:
  “The bartender offers you a can of beer for free... 'Come on... Get into the groove... You can pay me for the next one!'”
  This action adds “a can of beer” to “In your hipster bag.”

- If there is already “a can of beer” in “In your hipster bag,” the text under the image alternates between:
  “You wait. Beer, beer, beer... You don't care…”
  and
  “It's kind of nice here. But no coffee...”

#### Location: "Help"
**Header:** Displays Health, Money, Espressos, and “In your hipster bag.”
**Central screen:** The image shows an explanation screen with the caption:
“You're a hipster. And you love iThings and your cool bag. But right now you're almost broke. And that's bad. Because you're an Espresso Addict too, a caffeine junkie. You need your fix: 5 cups of espresso. Otherwise, you will soon start to feel really shaky! So go get your fix... Lurk around and wait for opportunities!”
**Footer:** Button: “Continue”.
*In the top-right corner*, there is the “Full screen” option.
**Possible actions in this location:**
- Clicking “Continue” returns you to the previous location.
