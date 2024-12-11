import { When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';


When('I click the {string} option', async function(a){
 
  const fullScreenButton = await this.driver.wait(
    until.elementLocated( By.css( ".go-fullscreen" )),
    10000
  );
  await this.driver.wait( until.elementIsVisible( fullScreenButton ),10000);
  await fullScreenButton.click();
});


Then('the game should switch to full screen mode', async function(){
  // Check if the screen is in full-screen mode
  const isFullScreen = await this.driver.executeScript( "return !!document.fullscreenElement;" );
  expect( isFullScreen ).to.be.true;
});

When( 'I press the {string} key on my computer', async function ( a ) {
  await this.driver.sleep( 1000 ); 

  // const element = await this.driver.findElement( { css: 'body' } );
  // await element.sendKeys( Key.ESCAPE );

  await this.driver.executeScript( 'if (document.fullscreenElement) document.exitFullscreen();' );
});


Then('the game should exit full screen mode', async function(){
  await this.driver.sleep( 1000 );
  const isFullScreen = await this.driver.executeScript( "return !!document.fullscreenElement;" );
  expect( isFullScreen ).to.be.false;
});
