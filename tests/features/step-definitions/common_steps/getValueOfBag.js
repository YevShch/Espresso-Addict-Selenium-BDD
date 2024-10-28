import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import { driver } from '../../support/world.js';
import { sectionClassMap } from "./helpers/sectionClassMap.js";


export default async function getValueOfBag ( sectionName ) {
  const sectionClass = sectionClassMap[ sectionName.toLowerCase() ];

  // Wait until the section element is located in the DOM
  const sectionElement = await driver.wait(
    until.elementLocated( By.css( `section.${ sectionClass }` ) ),
    10000
  );

  // Wait until the section element becomes visible on the page
  await driver.wait( until.elementIsVisible( sectionElement ), 10000 );

  // Locate the bag content within the section and get its text
  const valueElement = await sectionElement.findElement( By.css( 'span.bag-content span' ) );
  const actualValue = await valueElement.getText();
  // console.log( `Value of ${ sectionName } from function is ${ actualValue }` )
  return actualValue;
};

