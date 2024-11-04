# ☕ Workshop: Selenium + BDD/Cucumber

## Workshop Overview
This is a summary of a one-week school workshop where I tested the **Espresso Addict** a small text adventure using **Selenium** in combination with **Cucumber/BDD**. The workshop focused on black-box testing, where the internal game code was not examined, and testing was done through the browser interface, interacting with the game's DOM elements.

### Workshop Objectives:
During the workshop, I was tasked with:
- Performing **exploratory testing** of the Espresso Addict game to understand how it works, its rules, how to win, and how to lose. Exploratory Testing Report can be found **[here](https://github.com/YevShch/Espresso-Addict/blob/main/Exploratory_testing.md)**
- Writing **BDD features in Gherkin** based on user stories derived from my exploratory testing. Each feature was required to have several test scenarios.
- Combining the **Selenium test framework** with the game code to perform black-box testing. This required interacting with the HTML DOM without looking at the underlying game code.
- Analyzing the game’s DOM structure to identify useful HTML elements, CSS classes, and IDs to be used in step definitions for BDD tests.
- Writing and executing step definitions for the test scenarios in **Cucumber** and checking if the tests passed or if the game had bugs that caused some tests to fail.
- Reflecting on the experience of working with **Selenium** compared to other testing frameworks, like Cypress.io, and evaluating the pros and cons of each.

### What I Did:
- I performed **exploratory testing** of the game to understand its mechanics and possible outcomes (winning, losing, and interacting with various in-game elements).
- Based on this, I wrote BDD **features and scenarios** in Gherkin, covering key aspects of the game's functionality.
- I used **Selenium WebDriver** to simulate user interactions with the game through a browser, without directly accessing the game’s code. This involved interacting with DOM elements such as buttons, links, and text fields.
- I analyzed the DOM structure of the game and identified the most important HTML elements, which I then used in my **step definitions** to perform actions and validate the results of user interactions.
- I successfully implemented and ran the BDD tests, checking if the game behaved as expected and identifying areas where it didn't meet the requirements (possible bugs).
- To make the tests more efficient, I reused step definitions across multiple scenarios, minimizing redundant code and focusing on clear, maintainable test scripts.
  
## How to Install the Project and Run Tests

### 1. Clone the Repository:
```bash
git clone <your-repository-url>
cd <your-repository-name>
```
### 2. Install Dependencies:
Ensure you have Node.js installed, then install the required packages.
```bash
npm install
```

### 3. Run the Game:
To start the Espresso Addict game locally:
```bash
npm start
```

### 4. Run Tests:
To run all Cucumber/BDD tests, execute:
```bash
npm test
```
### 5. Generate Test Reports:
To generate a test report after running the tests, use:


```bash
npm run report
```
