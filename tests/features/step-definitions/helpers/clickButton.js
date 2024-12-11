import { By, until } from 'selenium-webdriver';
import { driver } from '../../support/world.js';

export default async function clickButton ( buttonText ) {
  const button = await driver.wait(
    until.elementLocated( By.xpath(
      `//menu[@class='choices']//li[text()='${ buttonText }']` ) ),
    10000
  );
  await driver.wait(
    until.elementIsVisible( button ),
    10000
  );
  await button.click();
}
