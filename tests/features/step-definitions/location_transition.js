
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

// Given('I am at the location {string}', async function(current_location){
//   // TODO: implement step
// });

When('I click on {string}', async function(action){
  // TODO: implement step
});

Then('I should be taken to the location {string}', async function(expected_location){
  // TODO: implement step
});

Then('the location should display the correct image and description', async function(){
  // TODO: implement step
});

Then('I should have the following actions available: {string}', async function(available_actions){
  // TODO: implement step
});
