
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Then('the value of my {string} is {float}', async function(a, b){
  // TODO: implement step
});

Given('the value of my {string} is <initial_health>', async function(a){
  // TODO: implement step
});

When('I choose to click {string} <click_count> times', async function(a){
  // TODO: implement step
});

Then('the value of my {string} should be <expected_health>', async function(a){
  // TODO: implement step
});

When('I choose to {string} until my {string} reaches {float}', async function(a, b, c){
  // TODO: implement step
});

Then('the game is over', async function(){
  // TODO: implement step
});