import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import startLocation from '../common-steps/startLocation.js';

Given('I am at the location {string}', async function(location){
  await startLocation( location )
});

Given('I see the current picture of the location', async function(){
  // TODO: implement step
});

When('I wait until the event {string} occurs', async function(event_message){
  // TODO: implement step
});

Then('the event {string} should be initialized', async function(event_message){
  // TODO: implement step
});

Then('I should see the picture change', async function(){
  // TODO: implement step
});

Then('I should see the text {string}', async function(event_text){
  // TODO: implement step
});

Given('I wait until the event {string} occurs', async function(event_message){
  // TODO: implement step
});

Given('the event {string} should be initialized', async function(event_message){
  // TODO: implement step
});

When('I choose to {string} repeatedly', async function(a){
  // TODO: implement step
});

Then('I should not see the event message {string}', async function(event_message){
  // TODO: implement step
});

Given('I am at the {string}', async function(location){
  // TODO: implement step
});
