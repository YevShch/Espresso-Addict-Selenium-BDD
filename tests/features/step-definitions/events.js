import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import getValue from './common_steps/getValue.js';
import clickButton from './common_steps/clickButton.js';


Given('I see the initial picture of the location', async function(){
  this.initialImage = await this.driver.findElement(
    By.css( 'img.big-image' ) ).getAttribute( 'src' );
});

When('I wait until the event {string} occurs', async function(event_message){
  let eventFound = false;
    while ( !eventFound ) {
      await clickButton( 'Wait' );
      try {
        await this.driver.wait(
          until.elementLocated( By.xpath( `//p[contains(@class, 'description') and contains(text(), "${ event_message }")]` ) ),
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


Then('I should see the picture change', async function(){
  const currentImage = await this.driver.findElement(
    By.css( 'img.big-image' ) ).getAttribute( 'src' );
  expect( currentImage ).to.not.equal( this.initialImage);
});


Then( 'I should see the text includes the {string}', async function ( event_text ) {
  const element = await this.driver.wait( until.elementLocated( By.css( 'p.description' ) ), 10000 );
  const elementText = await element.getText();

  // Function to clean the text
  const cleanText = ( text ) => {
    // Replace all quotes with single quotes and remove invisible characters
    return text
      .replace( /["']/g, "'" )  // replace double quotes with single quotes
      .replace( /[^\x20-\x7E]/g, '' )  // remove invisible characters
      .replace( /\s+/g, ' ' )  // replace multiple spaces with a single space
      .trim();  // trim spaces from the beginning and the end
  };

  const normalizedElementText = cleanText( elementText );
  const normalizedExpectedText = cleanText( event_text );

  console.log( "Normalized Element Text:", normalizedElementText );
  console.log( "Normalized Expected Text:", normalizedExpectedText );

  expect( normalizedElementText ).to.include( normalizedExpectedText );
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
    const healthElement = await this.driver.wait(
      until.elementLocated( By.css( 'section.health .progress .val' ) ),
      1000
    );
    const healthText = await healthElement.getText();
    const currentHealth = parseFloat( healthText ); 
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


Then('the event {string} should not occur again', async function(event_message){
  const events = await this.driver.findElements(
    By.xpath( `//p[contains(@class, 'description') and contains(text(), "${ event_message }")]` )
  );
  // Check that the array is empty (element not found)
  expect( events.length ).to.equal( 0 );
});
   

Then( 'I should not see the event message {string}', async function ( event_message ) {
  const events = await this.driver.findElements(
    By.xpath( `//p[contains(@class, 'description') and contains(text(), "${ event_message }")]` )
  );
  // Check that the array is empty (element not found)
  expect( events.length ).to.equal( 0 );
} );
