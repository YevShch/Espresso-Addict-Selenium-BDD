
import { Given, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import clickButton from './helpers/clickButton.js';
import getTextFromDescription from './helpers/getTextFromDescription.js';
import winTheGame from './helpers/winTheGame.js';


Then('I should be taken back to the start of the game', async function(){
  const startGameLocationText = 'outside the Cloud Forest Cafe'
  const elementText = await getTextFromDescription();
  expect( elementText ).includes( startGameLocationText );
});


Given('I play until the game ends when espressos reach {float}', async function(a){
  // await winTheGame(); 
  
  await clickButton( 'Go north' );
  await clickButton( 'Go east' );

  let eventFound = false;
  while ( !eventFound ) {
    await clickButton( 'Wait' );
    try {
      await this.driver.wait(
        until.elementLocated( By.xpath(
          `//p[contains(@class, 'description') and contains(text(), "a can of beer for free")]` ) ),
        1000
      );
      eventFound = true;
    } catch ( error ) {
      console.log( "The event has not been detected yet, we continue to wait..." );
    }
  }

  await clickButton( 'Go west' );
  await clickButton( 'Go south' );
  await clickButton( 'Go south' );
  await clickButton( 'Go west' );

  let event2Found = false;
  while ( !event2Found ) {
    await clickButton( 'Wait' );
    try {
      await this.driver.wait(
        until.elementLocated( By.xpath(
          `//p[contains(@class, 'description') and contains(text(), "jam with us?")]` ) ),
        1000
      );
      event2Found = true;
    } catch ( error ) {
      console.log( "The event has not been detected yet, we continue to wait..." );
    }
  }

  await clickButton( 'Jam with the band' );
  await clickButton( 'Go east' );
  await clickButton( 'Go north' );
  await clickButton( 'Enter the cafe' );

  let event3Found = false;
  while ( !event3Found ) {
    await clickButton( 'Wait' );
    try {
      await this.driver.wait(
        until.elementLocated( By.xpath(
          `//p[contains(@class, 'description') and contains(text(), "The barista is in a dark corner")]` ) ),
        1000
      );
      event3Found = true;
    } catch ( error ) {
      console.log( "The event has not been detected yet, we continue to wait..." );
    }
  }

  await clickButton( 'Give beer to barista' );


  for ( let i = 0; i < 3; i++ ) {
    const button = await this.driver.wait(
      until.elementLocated( By.xpath(
        `//menu[@class='choices']//li[text()='Buy an espresso']` ) ),
      10000 );
    const isDisplayed = await button.isDisplayed();
    if ( isDisplayed ) {
      await button.click();
    } else {
      throw new Error( `Button 'Buy an espresso' is not displayed.` );
    }
  }
});
