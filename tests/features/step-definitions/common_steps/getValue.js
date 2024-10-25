import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import { driver } from '../../support/world.js';
import { sectionClassMap } from "./sectionClassMap.js";

export default async function getValue ( sectionName, expectedValue ) {
  const sectionClass = sectionClassMap[ sectionName.toLowerCase() ];
  const sectionElement = await driver.findElement( By.css( `section.${ sectionClass }` ) );
  const valueElement = await sectionElement.findElement( By.css( 'div.progress .val' ) );
  const valueText = await valueElement.getText();
  const actualValue = parseFloat( valueText );
  expect( actualValue ).to.equal( expectedValue, `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }` );
}
