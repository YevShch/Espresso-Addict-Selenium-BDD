import { When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';


When('I click the {string} option', async function(a){
 
  const fullScreenButton = await this.driver.wait(
    until.elementLocated( By.css( ".go-fullscreen" )),
    10000
  );
  await this.driver.wait(
    until.elementIsVisible( fullScreenButton ),
    10000
  );
  await fullScreenButton.click();

  // await this.driver.executeScript( "document.documentElement.requestFullscreen();" );

  // // Check if the screen is in full-screen mode
  // const isFullScreen = await this.driver.executeScript( "return !!document.fullscreenElement;" );
  // expect( isFullScreen ).to.be.true;
});

Then('the game should switch to full screen mode', async function(){
  // Check if the screen is in full-screen mode
  const isFullScreen = await this.driver.executeScript( "return !!document.fullscreenElement;" );
  expect( isFullScreen ).to.be.true;
});

When( 'I press the {string} key on my computer', async function ( a ) {
  await this.driver.sleep( 1000 ); 
  // const actions = this.driver.actions();
  // await actions.sendKeys( Key.ESCAPE ).perform();
  await this.driver.executeScript( 'document.dispatchEvent(new KeyboardEvent("keydown", {key: "Escape"}));' ); 
  // const body = await this.driver.findElement( By.tagName( 'body' ) );
  // await body.sendKeys( Key.ESCAPE );

  // async function pressEscape ( element ) {
  //   await element.sendKeys( Key.ESCAPE );
  // }
});

Then('the game should exit full screen mode', async function(){
  const isFullScreen = await this.driver.executeScript( "return !!document.fullscreenElement;" );
  expect( isFullScreen ).to.be.false;
});