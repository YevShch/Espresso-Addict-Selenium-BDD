import { Given, Then } from '@cucumber/cucumber';
import { By } from 'selenium-webdriver';
import { expect } from 'chai';
import getTextFromDescription from './common_steps/getTextFromDescription.js';
import getActionButtons from './common_steps/getActionButtons.js';


Given( 'I see the initial picture of the location', async function () {
  this.initialImage = await this.driver.findElement(
    By.css( 'img.big-image' ) ).getAttribute( 'src' );
} );

Then('I should be taken to the location {string}', async function(expected_location){
  // Get the tex from element
  const elementText = await getTextFromDescription();
  expect( elementText ).includes( expected_location );
} );


Then( 'I should see the picture change', async function () {
  const currentImage = await this.driver.findElement(
    By.css( 'img.big-image' ) ).getAttribute( 'src' );
  expect( currentImage ).to.not.equal( this.initialImage );
} );


Then('I should see the following action buttons: {string}', async function(available_actions){
  const expectedButtons = available_actions.split( ',' ).map( button => button.trim() );

  // Get the actual buttons using the getActionButtons function
  const actualButtons = await getActionButtons( );
  // Check that all expected buttons are present
  expectedButtons.forEach( button => {
    expect( actualButtons ).to.include( button, `Button "${ button }" is missing from the list.` );
  } );

});
