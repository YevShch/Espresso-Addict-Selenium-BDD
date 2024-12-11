import { Given, When} from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import startLocation from './helpers/startLocation.js';;
import getValueOfBag from './helpers/getValueOfBag.js';
import clickButton from './helpers/clickButton.js';
import getValueOfScores from './helpers/getValueOfScores.js';

Given( 'I am at the location {string}', async function ( location ) {
  await startLocation( location )
} );


Given( 'the value of my {string} is {float}', async function ( sectionName, expectedValue ) {
  const actualValue = await getValueOfScores( sectionName );

  expect( actualValue ).to.equal( expectedValue,
    `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }`
  );
} );


Given( 'the value of my {string} is {string}', async function ( sectionName, expectedValue ) {
  const actualValue = await getValueOfBag( sectionName );
 
  expect( actualValue ).to.equal( expectedValue,
    `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }`
  );
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
  const actualValue = await getValueOfScores( sectionName );
 
  expect( actualValue ).to.equal( expectedValue,
    `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }`
  );
} );


Given( 'the value of my {string} should be {string}', async function ( sectionName, expectedValue ) {
  const actualValue = await getValueOfBag( sectionName );
 
  expect( actualValue ).to.equal( expectedValue,
    `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }`
  );
} );

