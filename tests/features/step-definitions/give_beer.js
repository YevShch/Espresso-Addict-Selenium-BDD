import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import clickButton from './common_steps/clickButton.js';
import getValueOfScores from './common_steps/getValueOfScores.js';


When('I came to the cafe', async function(){
  await clickButton( 'Go west' );
  await clickButton( 'Go south' );
  await clickButton( 'Enter the cafe' );
});


When('I know the current value of my {string}', async function(sectionName){
 // Save initial value of a score in a global variable
  if ( sectionName === 'Health' ) {
    this.healthValueBefore = await getValueOfScores( sectionName );
  } else if ( sectionName === 'Money' ) {
    this.moneyValueBefore = await getValueOfScores( sectionName );
  } else if ( sectionName === 'Espressos' ) {
    this.espressosValueBefore = await getValueOfScores( sectionName );
  } else {
    throw new Error( `Unknown section name: ${ sectionName }` );
  }
});


Then( 'the value of my {string} should increase by {float}', async function ( sectionName, count ) {
  if ( sectionName === 'Health' ) {
    const healthValueAfter = await getValueOfScores( sectionName );
    expect( healthValueAfter ).to.equal( this.healthValueBefore + count );
  } else if ( sectionName === 'Espressos' ) {
    const espressosValueAfter = await getValueOfScores( sectionName );
    expect( espressosValueAfter ).to.equal( this.espressosValueBefore + count );
  } else {
    throw new Error( `Unknown section name: ${ sectionName }` );
  }
} );

Then('the value of my {string} should remain the same', async function(sectionName){
  const moneyValueAfter = await getValueOfScores( sectionName );
  expect(moneyValueAfter).to.equal(this.moneyValueBefore)
});

