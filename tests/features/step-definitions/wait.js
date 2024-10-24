
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('I note the current text under the picture', async function(){
  // TODO: implement step
});

Then('the text under the picture is different from the initial text', async function(){
  // TODO: implement step
});

When('I choose to {string} again', async function(a){
  // TODO: implement step
});

Then('the text under the picture is different from the previously updated text', async function(){
  // TODO: implement step
});

Then('the text under the picture changes to {string}', async function(text_variation_1){
  // TODO: implement step
});

Then('the text under the picture changes to {string}', async function(text_variation_2){
  // TODO: implement step
});