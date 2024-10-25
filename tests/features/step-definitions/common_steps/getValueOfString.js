import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import { driver } from '../../support/world.js';
import { sectionClassMap } from "./sectionClassMap.js";

export default async function getValueOfString ( sectionName, expectedValue ) {
  const sectionClass = sectionClassMap[ sectionName.toLowerCase() ];
  const sectionElement = await driver.findElement( By.css( `section.${ sectionClass }` ) );
  const valueText = await sectionElement.getText();
  const actualValue = valueText.includes( expectedValue ) ? expectedValue : "nothing cool";
  expect( actualValue ).to.equal( expectedValue, `Expected ${ sectionName } to be ${ expectedValue }, but got ${ actualValue }` );
}
