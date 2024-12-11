import { Given, Then } from '@cucumber/cucumber';
import { By, until} from 'selenium-webdriver';
import { expect } from 'chai';
import { driver } from '../support/world.js';
import getActionButtons from './helpers/getActionButtons.js'


Given('that I have started the game by navigating to {string}', async function(url){
  await driver.get( url );
});


Then( 'I should be at the location {string}', async function ( location_text ) {
  const element = await this.driver.wait(
    until.elementLocated( By.css( 'p.description' ) ),
    10000
  );
  await this.driver.wait( until.elementIsVisible( element ), 10000 );

  const elementText = await element.getText();

  expect( elementText ).includes( location_text );
} );


Then( 'I should see the text {string}', async function ( location_text ) {

  const elementText = await this.driver.wait(
    until.elementLocated( By.css( "p.description" ) ),
    10000
  );
  await this.driver.wait( until.elementIsVisible( elementText ), 10000 );
  await this.driver.sleep( 2000 );
  // Retrieve the text content of the element
  const text = await elementText.getText();

  expect( text ).to.include( location_text )
} );


Then( 'I should see the following action buttons:', async function ( table ) {
  // Extract expected button labels from the feature step table
  const expectedButtons = table.raw().flat();

  // Get the actual buttons using the getActionButtons function
  const actualButtons = await getActionButtons();

  // Check that all expected buttons are present
  expectedButtons.forEach( button => {
    expect( actualButtons ).to.include( button, `Button "${ button }" is missing from the list.` );
  } );
} );
