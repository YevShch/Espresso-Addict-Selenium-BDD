import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import getValueOfScores from './common_steps/getValueOfScores.js';
import clickButton from './common_steps/clickButton.js';
import cleanText from './common_steps/helpers/cleanText.js';



When( 'I wait until the event {string} occurs', async function ( event_message ) {
  let eventFound = false;
  while ( !eventFound ) {
    await clickButton( 'Wait' );
    try {
      await this.driver.wait(
        until.elementLocated( By.xpath(
          `//p[contains(@class, 'description') and contains(text(), "${ event_message }")]` ) ),
        1000
      );
      eventFound = true;
      console.log( "The event found:", event_message );
    } catch ( error ) {
      console.log( "The event has not been detected yet, we continue to wait..." );
    }
  }
} );


Then( 'the event {string} should be initialized', async function ( event_message ) {
  const event = await this.driver.findElement(
    By.xpath( `//p[contains(@class, 'description') and contains(text(), "${ event_message }")]` )
  );

  const isDisplayed = await event.isDisplayed();
  expect( isDisplayed ).to.be.true;
} );



Then( 'I should see the text includes the {string}', async function ( event_text ) {
  // Get the tex from element
  const elementText = await getTextFromDescription();
  expect( elementText ).includes( event_text );
} );


Then( 'I should see the button {string}', async function ( button_text ) {
  //If button_text is missing, just skip the check
  if ( !button_text ) {
    return;
  }
  const button = await this.driver.wait(
    until.elementLocated( By.xpath( `//menu[@class='choices']//li[text()='${ button_text }']` ) ),
    10000
  );
  const isVisible = await button.isDisplayed();
  expect( isVisible ).to.be.true;
} );


When( 'I repeatedly choose {string} until the event {string} occurs or the game ends', async function ( buttonName, event_message ) {
  let eventFound = false;

  while ( !eventFound ) {
   
    const currentHealth = await getValueOfScores( 'Health' );
    // console.log( "Current value of Health: ", currentHealth );

    if ( currentHealth <= 0 ) {
      console.log( "Health is zero or less. Stopping the wait." );
      break;
    }
    await clickButton( buttonName );
    try {
      await this.driver.wait(
        until.elementLocated( By.xpath(
          `//p[contains(@class, 'description') and contains(text(), "${ event_message }")]` ) ),
        1000
      );
      eventFound = true;
      console.log( "The event found:", event_message );
    } catch ( error ) {
      // console.log( "The event has not been detected yet, we continue to wait..." );
    }
  }
} );


Then( 'the event {string} should not occur again', async function ( event_message ) {
  const events = await this.driver.findElements(
    By.xpath( `//p[contains(@class, 'description') and contains(text(), "${ event_message }")]` )
  );
  // Check that the array is empty (element not found)
  expect( events.length ).to.equal( 0 );
} );


Then( 'I should not see the event message {string}', async function ( event_message ) {
  const events = await this.driver.findElements(
    By.xpath( `//p[contains(@class, 'description') and contains(text(), "${ event_message }")]` )
  );
  // Check that the array is empty (element not found)
  expect( events.length ).to.equal( 0 );
} );
