import {When} from '@cucumber/cucumber';
import clickButton from './helpers/clickButton.js';


When('I moved to the location {string}', async function(a){
  await clickButton('Go west');
  await clickButton( 'Go south' );
  await clickButton( 'Enter the cafe' );
});


