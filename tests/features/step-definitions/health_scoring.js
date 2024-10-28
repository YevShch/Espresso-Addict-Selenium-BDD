import { Given, When, Then } from '@cucumber/cucumber';
import { By, until} from 'selenium-webdriver';
import { expect } from 'chai';
import clickButton from './common_steps/clickButton.js';
import getValueOfScores from './common_steps/getValueOfScores.js';
import cleanText from './common_steps/helpers/cleanText.js';


Given( 'the value of {string} is {string}', async function ( sectionName, initial_health ) {
  const expectedValue = parseFloat( initial_health );
  const actualValue = await getValueOfScores( sectionName );
  
  expect( actualValue ).to.equal(
    expectedValue,
    `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }`
  );
} );


When( 'I choose to click {string} {string} times', async function ( button_text, click_count ) {
  let count = parseInt( click_count ); // Convert the string to an integer
  console.log( "Count: ", count )
  for ( let i = 0; i < count; i++ ) {
    await clickButton( button_text );
  }
} );


Then( 'the value of {string} should be {string}', async function ( sectionName, expected_health ) {
  // Convert expected values from a string to an array of numbers
  const expectedValue = expected_health.split( ' or ' ).map( value => parseFloat( value.trim() ) );

  const actualValue = await getValueOfScores( sectionName );

  expect( actualValue ).to.be.oneOf(
    expectedValue,
    `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }`
  );
} );


Given( 'I play until the game ends when {string} reaches {float}', async function ( sectionName, health_count ) {
  // Click wait untill health reaches 0
  while ( true ) {
    // Get the current value using getValue
    const currentHealth = await getValueOfScores( sectionName ); // getValue will return the health value

    if ( currentHealth <= health_count ) {
      console.log( "Health has reached the target value. Stopping the clicks." );
      break; // Stop the loop if health has reached or fallen below the target value
    }

    // Click the button and wait for the value to update
    await clickButton( 'Wait' );
    await this.driver.sleep( 500 ); // Wait a small delay for health to update stably
  }
} );


Then( 'the game should end with the message {string}', async function ( endGameMessage ) {
  const elementText = await this.driver.wait(
    until.elementLocated( By.css( "p.description" ) ),
    10000
  );
  await this.driver.wait( until.elementIsVisible( elementText), 10000 );
  await this.driver.sleep( 2000 );
  // Retrieve the text content of the element
  const text = await elementText.getText();

  // const normalizedElementText = cleanText(text );
  // const normalizedExpectedText = cleanText( endGameMessage );
  // expect( normalizedElementText ).to.include( normalizedExpectedText );

  expect( text ).to.include( endGameMessage )
} );

