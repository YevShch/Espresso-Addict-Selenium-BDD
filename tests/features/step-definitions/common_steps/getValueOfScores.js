import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import { driver } from '../../support/world.js';
import { sectionClassMap } from "./helpers/sectionClassMap.js";


export default async function getValueOfScores ( sectionName ) {
  const sectionClass = sectionClassMap[ sectionName.toLowerCase() ];
  // console.log( `Name of section ${ sectionName } from function is ${ sectionClass }` )
  // Wait until the section element is located in the DOM
  const sectionElement = await driver.wait(
    until.elementLocated( By.css( `section.${ sectionClass }` ) ),
    10000
  );

  // Wait until the section element becomes visible on the page
  await driver.wait( until.elementIsVisible( sectionElement ), 10000 );

  const valueElement = await sectionElement.findElement( By.css( 'div.progress .val' ) );
  await driver.wait( until.elementIsVisible( valueElement ), 10000 );

  // Retrieve the text content and parse it as a float
  const valueText = await valueElement.getText();
  const actualValue = parseFloat( valueText );
  // console.log( `Value of ${ sectionName } from function is ${ actualValue }` )
  return actualValue;

}

