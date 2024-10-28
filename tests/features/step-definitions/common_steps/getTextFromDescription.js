import { By, until } from 'selenium-webdriver';
import { driver } from '../../support/world.js'; 

// export default async function getTextFromDescription () {
//   // Find the element by the provided selector and wait until it's located in the DOM
//   const event = await this.driver.wait(
//     until.elementLocated( By.css( "p.description" ) ),
//     10000
//   );
//   await this.driver.wait( until.elementIsVisible( event ), 10000 );
//   // await this.driver.sleep( 2000 ); 
//   // Retrieve the text content of the element
//   const text = await event.getText();
//   console.log( "Text inside the description element:", text );

//   return text;
// }

export default async function getTextFromDescription () {
  const event = await driver.findElement( By.xpath( "//main/p[contains(@class, 'description')]" ),
    10000
  );
  await driver.wait( until.elementIsVisible( event ), 10000 );

  const text = await event.getText();
  console.log( "Text inside the description element:", text );

  return text;
}
