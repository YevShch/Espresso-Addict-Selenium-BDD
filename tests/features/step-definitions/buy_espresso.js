import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import startLocation from './startLocation.js';
import { sectionClassMap } from '../support/sectionClassMap.js';


Given('I am at the location {string}', async function(location){
  console.log( `Navigating to location: ${ location }` );
  // await startLocation( location )
  await this.driver.get( 'http://localhost:3000' );
  const button = await this.driver.wait( until.elementLocated( By.xpath( "//*[contains(text(),'Enter the cafe')]" ) ), 10000 );
  await button.click();

});

Given( 'the value of my {string} is {float}', async function ( sectionName, expectedValue ){
  const sectionClass = sectionClassMap[ sectionName.toLowerCase() ];
  const sectionElement = await this.driver.findElement( By.css( `section.${ sectionClass }` ) );
  const valueElement = await sectionElement.findElement( By.css( 'div.progress .val' ) );
  const valueText = await valueElement.getText();
  const actualValue = parseFloat( valueText );
  expect( actualValue ).to.equal( expectedValue, `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }` );
  });
  

Given( 'the value of my {string} is {string}', async function ( sectionName, expectedValue ){
  const sectionClass = sectionClassMap[ sectionName.toLowerCase() ];
  const sectionElement = await this.driver.findElement( By.css( `section.${ sectionClass }` ) );
  const valueText = await sectionElement.getText();
  const actualValue = valueText.includes( expectedValue ) ? expectedValue : "nothing cool";
  expect( actualValue ).to.equal( expectedValue, `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }` );

});

// When('I click the {string} button', async function(buttonText){
//   // Find the <li> element with text that matches the buttonText variable
//   const button = await this.driver.findElement( By.xpath( `//menu[@class='choices']//li[text()='${ buttonText }']` ) );
//   // Click on the found element
//   await button.click();
// });

When( 'I click the {string} button', async function ( buttonText ) {
  // Wait for the <li> element with text that matches the buttonText variable to be present in the DOM
  const button = await this.driver.wait(
    until.elementLocated( By.xpath( `//menu[@class='choices']//li[text()='${ buttonText }']` ) ),
    10000 // время ожидания в миллисекундах
  );
  // Wait for the button to be visible
  await this.driver.wait(
    until.elementIsVisible( button ),
    10000 // время ожидания в миллисекундах
  );
  // Click on the found element
  await button.click();
} );



Given( 'I bought {float} espressos', async function ( a ) {
  for ( let i = 0; i < a; i++ ) {
    const button = await this.driver.wait( until.elementLocated( By.xpath( `//menu[@class='choices']//li[text()='Buy an espresso']` ) ), 10000 );
    const isDisplayed = await button.isDisplayed();
    if ( isDisplayed ) {
      await button.click();
    } else {
      throw new Error( `Button 'Buy an espresso' is not displayed.` );
    }
  }
} );

Given( 'the value of my {string} should be {float}', async function ( sectionName, expectedValue ){
  const sectionClass = sectionClassMap[ sectionName.toLowerCase() ];
  if ( !sectionClass ) {
    throw new Error( `No section found for ${ sectionName }` );
  }
  const sectionElement = await this.driver.findElement( By.css( `section.${ sectionClass }` ) );
  const valueElement = await sectionElement.findElement( By.css( 'div.progress .val' ) );
  const valueText = await valueElement.getText();
  const actualValue = parseFloat( valueText );
  expect( actualValue ).to.equal( expectedValue, `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }` );
});

Given( 'the value of my {string} should be {string}', async function ( sectionName, expectedValue ) {
  const sectionClass = sectionClassMap[ sectionName.toLowerCase() ];
  if ( !sectionClass ) {
    throw new Error( `No section found for ${ sectionName }` );
  }

  const sectionElement = await this.driver.findElement( By.css( `section.${ sectionClass }` ) );
  const valueText = await sectionElement.getText();
  const actualValue = valueText.includes( expectedValue ) ? expectedValue : "nothing cool";
  expect( actualValue ).to.equal( expectedValue, `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }` );
} );


Then('I should not see {string} button', async function(buttonText){
  const button = await this.driver.findElements( By.xpath( `//menu[@class='choices']//li[text()='${ buttonText }']` ) );
  expect( button.length ).to.equal( 0, `Expected button '${ buttonText }' to not be present in the DOM.` );

 
});

