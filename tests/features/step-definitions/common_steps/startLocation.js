import { By, until } from 'selenium-webdriver';
import { driver } from '../../support/world.js';

export default async function startLocation ( location ) {
  try {
    await driver.get( 'http://localhost:3000' ); // Используем driver напрямую
    console.log( `Loading game at: http://localhost:3000` );

    switch ( location ) {
      case 'outside the Cloud Forest Cafe':
        break;

      case 'in the Cloud Forest Cafe':
        const button = await driver.wait( until.elementLocated( By.xpath( "//*[contains(text(),'Enter the cafe')]" ) ), 10000 );
        await button.click();

        break;

      case 'on an empty street':
        const button1 = await driver.wait( until.elementLocated( By.xpath( "//*[contains(text(),'Go north')]" ) ), 10000 );
        await button1.click();
        break;

      case 'in a crowded bar':
        const button2 = await driver.wait( until.elementLocated( By.xpath( "//*[contains(text(),'Go north')]" ) ), 10000 );
        await button2.click();

        const button3 = await driver.wait( until.elementLocated( By.xpath( "//*[contains(text(),'Go east')]" ) ), 10000 );
        await button3.click();
        break;

      case 'in the country-side':
        const button4 = await driver.wait( until.elementLocated( By.xpath( "//*[contains(text(),'Go south')]" ) ), 10000 );
        await button4.click();
        break;

      case 'A guitarist and a sax player':
        const button5 = await driver.wait( until.elementLocated( By.xpath( "//*[contains(text(),'Go south')]" ) ), 10000 );
        await button5.click();
        const button6 = await driver.wait( until.elementLocated( By.xpath( "//*[contains(text(),'Go west')]" ) ), 10000 );
        await button6.click();
        break;

      default:
        throw new Error( `Unknown location: ${ location }` );
    }
  } catch ( error ) {
    console.error( `Error while starting location ${ location }: ${ error.message }` );
    throw error; 
  }
}
