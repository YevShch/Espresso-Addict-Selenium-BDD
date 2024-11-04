import { Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import getTextFromDescription from './common_steps/getTextFromDescription.js';


Then( "I should see a brief description of the game's purpose", async function () {
  const partOfGameDescription = "You're a hipster. And you love iThings and your cool bag.";

  const actualDescriptionText = await getTextFromDescription();

  // Check that the text contains the expected part of the description
  expect( actualDescriptionText ).to.include(
    partOfGameDescription,
    `Expected text to contain "${ partOfGameDescription }", but received "${ actualDescriptionText }"`
  );
} );


Then( 'I should be back at the location {string}', async function ( location ) {
  const actualDescriptionText = await getTextFromDescription();

  // Check that the text contains the expected part of location
  expect( actualDescriptionText ).to.include(
    location,
    `Expected text to contain "${ location }", but received "${ actualDescriptionText }"`
  );
} );
