import { By, until } from 'selenium-webdriver';
import { driver } from '../../support/world.js';

export default async function getTextFromDescription () {
  // Wait for the menu with choices to be located and visible
  await driver.wait( until.elementLocated( By.css( 'menu.choices' ) ), 10000 );
  const menuElement = await driver.wait(
    until.elementIsVisible( driver.findElement( By.css( 'menu.choices' ) ) ),
    10000
  );

  // Find all <li> elements within <menu class="choices">
  const buttonElements = await menuElement.findElements( By.css( 'ul li' ) );

  // Get text for each <li> element
  const actionButtons = await Promise.all( buttonElements.map( async ( element ) => {
    return await element.getText();
  } ) );

  return actionButtons;
}
