import { By, until } from 'selenium-webdriver';
import { driver } from '../../support/world.js'; 

export default async function getTextFromDescription () {
  const event = await driver.findElement( By.xpath( "//main/p[contains(@class, 'description')]" ),
    10000
  );
  await driver.wait( until.elementIsVisible( event ), 10000 );

  const text = await event.getText();
  console.log( "Text inside the description element:", text );

  return text;
}
