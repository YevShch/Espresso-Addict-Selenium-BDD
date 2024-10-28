import { By, until } from 'selenium-webdriver';
import { driver } from '../../support/world.js';
import clickButton from './clickButton.js';

export default async function winTheGame() {
  // Go to the crowded bar
  await clickButton( 'Go north' );
  await clickButton( 'Go east' );
// wait the event a beer for free
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
// go to the concert
  await clickButton( 'Go west' );
  await clickButton( 'Go south' );
  await clickButton( 'Go south' );
  await clickButton( 'Go west' );
// wait the event jam with the band and get bonus
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
  // Go to the cafe
  await clickButton( 'Go east' );
  await clickButton( 'Go north' );
  await clickButton( 'Enter the cafe' );
// wait event with barista
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

// Buy 3 espresso
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


}
