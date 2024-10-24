import { By, until } from 'selenium-webdriver';

export default async function startLocation ( location ) {
  // Load the game
  await this.driver.get( 'http://localhost:3000' );  

  switch ( location ) {
    case 'outside the Cloud Forest Cafe':
     // already at the location 
      break;
    case 'in the Cloud Forest Cafe':
      await this.driver.findElement(
        By.xpath( "//*[contains(text(),'Enter the cafe')]" )
      ).click();
      break;
    
    case 'on an empty street':
      await this.driver.findElement(
        By.xpath( "//*[contains(text(),'Go north')]" )
      ).click();
      break;
    
    case 'in a crowded bar':
      await this.driver.findElement(
        By.xpath( "//*[contains(text(),'Go north')]" )
      ).click();

      await this.driver.findElement(
        By.xpath( "//*[contains(text(),'Go east')]" )
      ).click();
      break;
    
    case 'in the country-side':
      await this.driver.findElement(
        By.xpath( "//*[contains(text(),'Go south')]" )
      ).click();
      break;
    
    case 'A guitarist and a sax player':
      await this.driver.findElement(
        By.xpath( "//*[contains(text(),'Go south')]" )
      ).click();
      await this.driver.findElement(
        By.xpath( "//*[contains(text(),'Go west')]" )
      ).click();
      break;
    default:
      throw new Error( `Unknown location: ${ location }` );
  }
}
