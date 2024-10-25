import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import startLocation from './common_steps/startLocation.js';
import getValue from './common_steps/getValue.js';
import getValueOfString from './common_steps/getValueOfString.js';
import clickButton from './common_steps/clickButton.js';

Given( 'I am at the location {string}', async function ( location ) {
  await startLocation( location )
} );

Given( 'the value of my {string} is {float}', async function ( sectionName, expectedValue ) {
  await getValue( sectionName, expectedValue ); 
} );

Given( 'the value of my {string} is {string}', async function ( sectionName, expectedValue ) {
  getValueOfString( sectionName, expectedValue );
} );

When( 'I click the {string} button', async function ( buttonText ) {
  await clickButton( buttonText );
} );


Given( 'I bought {float} espressos', async function ( a ) {
  for ( let i = 0; i < a; i++ ) {
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
} );

Given( 'the value of my {string} should be {float}', async function ( sectionName, expectedValue ) {
  await getValue( sectionName, expectedValue );
} );

Given( 'the value of my {string} should be {string}', async function ( sectionName, expectedValue ) {
  await getValueOfString( sectionName, expectedValue );
} );

Then( 'I should not see {string} button', async function ( buttonText ) {
  const button = await this.driver.findElements( By.xpath(
    `//menu[@class='choices']//li[text()='${ buttonText }']` ) );
  expect( button.length ).to.equal( 0, `Expected button '${ buttonText }' to not be present in the DOM.` );
} );

