import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import startLocation from '../common-steps/startLocation.js';
import { sectionClassMap } from '../support/sectionClassMap.js';


Given('I am at the location {string}', async function(location){
  await startLocation( location )
});

Given( 'the value of my {string} is {float}', async function ( sectionName, expectedValue ){
  const sectionClass = sectionClassMap[ sectionName.toLowerCase() ];
  if ( !sectionClass ) {
    throw new Error( `No section found for ${ sectionName }` );
  }
  // Find the section by class
  const sectionElement = await this.driver.findElement( By.css( `section.${ sectionClass }` ) );
  // Find the span element with the class 'val' inside the section
  const valueElement = await sectionElement.findElement( By.css( 'div.progress .val' ) );
  // Get the text value
  const valueText = await valueElement.getText();
  // Convert text to number
  const actualValue = parseFloat( valueText );
  // Compare the value with the expected number
  assert.strictEqual( actualValue, expectedValue, `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }` );
});

Given( 'the value of my {string} is {string}', async function ( sectionName, expectedValue ){
  const sectionClass = sectionClassMap[ sectionName.toLowerCase() ];
  if ( !sectionClass ) {
    throw new Error( `No section found for ${ sectionName }` );
  }
  const sectionElement = await this.driver.findElement( By.css( `section.${ sectionClass }` ) );
  const valueElement = await sectionElement.findElement( By.css( 'div.progress .val' ) );
  const valueText = await valueElement.getText();
  const actualValue = parseFloat( valueText );
  assert.strictEqual( actualValue, expectedValue, `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }` );
});

When('I click the {string} button', async function(a){
  // Find the <li> element with text that matches the buttonText variable
  const button = await this.driver.findElement( By.xpath( `//menu[@class='choices']//li[text()='${ buttonText }']` ) );
  // Click on the found element
  await button.click();
});

// Then( 'the value of my {string} should be {float}', async function ( sectionName, expectedValue ){
//   const sectionClass = sectionClassMap[ sectionName.toLowerCase() ];
//   if ( !sectionClass ) {
//     throw new Error( `No section found for ${ sectionName }` );
//   }
//   const sectionElement = await this.driver.findElement( By.css( `section.${ sectionClass }` ) );
//   const valueElement = await sectionElement.findElement( By.css( 'div.progress .val' ) );
//   const valueText = await valueElement.getText();
//   const actualValue = parseFloat( valueText );
//   assert.strictEqual( actualValue, expectedValue, `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }` );
// });

// Then( 'the value of my {string} should be {string}', async function ( sectionName, expectedValue ){
//   const sectionClass = sectionClassMap[ sectionName.toLowerCase() ];
//   if ( !sectionClass ) {
//     throw new Error( `No section found for ${ sectionName }` );
//   }
//   const sectionElement = await this.driver.findElement( By.css( `section.${ sectionClass }` ) );
//   const valueElement = await sectionElement.findElement( By.css( 'div.progress .val' ) );
//   const valueText = await valueElement.getText();
//   const actualValue = parseFloat( valueText );
//   assert.strictEqual( actualValue, expectedValue, `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }` );
// });

Given('I byed {float} espressos', async function(a){
  // Find the <li> element with text that matches the buttonText variable
  const button = await this.driver.findElement( By.xpath( `//menu[@class='choices']//li[text()='Buy an espresso']` ) );
  // Click on the found element
  for ( let i = 0; i < a; i++ ) {
    await button.click();
  }
});

Given( 'the value of my {string} should be {float}', async function ( sectionName, expectedValue ){
  const sectionClass = sectionClassMap[ sectionName.toLowerCase() ];
  if ( !sectionClass ) {
    throw new Error( `No section found for ${ sectionName }` );
  }
  const sectionElement = await this.driver.findElement( By.css( `section.${ sectionClass }` ) );
  const valueElement = await sectionElement.findElement( By.css( 'div.progress .val' ) );
  const valueText = await valueElement.getText();
  const actualValue = parseFloat( valueText );
  assert.strictEqual( actualValue, expectedValue, `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }` );
});

// When('I choose to {string}', async function(a){
//   // TODO: implement step
// });

Then('the purchase should be denied', async function(){
  // TODO: implement step
});
