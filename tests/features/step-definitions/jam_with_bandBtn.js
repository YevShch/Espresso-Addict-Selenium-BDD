import { Given} from '@cucumber/cucumber';
import { By, until} from 'selenium-webdriver';
import { expect } from 'chai';


Given( 'I should not see the {string} button', async function ( buttonName ) {
  // Find all buttons in the menu
  const buttons = await this.driver.wait(
    until.elementsLocated( By.css( 'menu.choices li' ) ),
    10000
  );

  // Retrieve the text of each button and store it in an array
  const buttonTexts = await Promise.all( buttons.map( async ( button ) => {
    return await button.getText();
  } ) );

  // Check that the array of button texts does not include the provided name
  expect( buttonTexts ).to.not.include(
    buttonName,
    `Expected button names not to include "${ buttonName }", but found it.`
  );
} );
