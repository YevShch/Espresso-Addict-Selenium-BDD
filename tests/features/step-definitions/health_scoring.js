import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import clickButton from './helpers/clickButton.js';
import getValueOfScores from './helpers/getValueOfScores.js';


Given( 'the value of {string} is {string}', async function ( sectionName, initial_health ) {
  const expectedValue = parseFloat( initial_health );
  const actualValue = await getValueOfScores( sectionName );

  expect( actualValue ).to.equal(expectedValue,
    `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }`
  );
} );


When( 'I choose to click {string} {int} times', async function ( button_text, count ) {
  for ( let i = 0; i < count; i++ ) {
    await clickButton( button_text );
  }
} );


Then( 'the value of {string} should {string}', async function ( sectionName, health_change ) {
  // Get the current health value after the action
  const currentValue = await getValueOfScores( sectionName );

  const initialHealth = this.healthValueBefore; // The saved initial health value before the action

  if ( health_change === 'decrease' ) {
    // Ensure the current value is less than the initial value
    expect( currentValue ).to.be.below(initialHealth,
      `Expected ${ sectionName } to decrease from ${ initialHealth }, but got ${ currentValue }`
    );
  } else if ( health_change === 'decrease or stay the same' ) {
    // Ensure the current value is less than or equal to the initial value
    expect( currentValue ).to.be.at.most( initialHealth,
      `Expected ${ sectionName } to decrease or stay the same (${ initialHealth }), but got ${ currentValue }`
    );
  } else {
    // If health_change is not one of the expected strings, throw an error
    throw new Error( `Unexpected health change format: ${ health_change }` );
  }
} );



// Then( 'the value of {string} should be {string}', async function ( sectionName, expected_health ) {
//   // Convert expected values from a string to an array of numbers
//   const expectedValue = expected_health.split( ' or ' ).map( value => parseFloat( value.trim() ) );

//   const actualValue = await getValueOfScores( sectionName );

//   expect( actualValue ).to.be.oneOf(
//     expectedValue,
//     `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }`
//   );
// } );


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
  await this.driver.wait( until.elementIsVisible( elementText ), 10000 );
  await this.driver.sleep( 2000 );
  // Retrieve the text content of the element
  const text = await elementText.getText();

  expect( text ).to.include( endGameMessage );
} );



Then( 'the value of my {string} should decrease', async function ( sectionName ) {
  const healthValueAfter = await getValueOfScores( sectionName );
  expect( this.healthValueBefore ).greaterThan( healthValueAfter );
} );
