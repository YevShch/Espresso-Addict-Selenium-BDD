// import { BeforeAll, AfterAll, AfterStep } from '@cucumber/cucumber';
// import { sleepBetweenSteps } from '../../config.js';
// import { driver } from './world.js';

// const sleep = ms => new Promise(res => setTimeout(res, ms));

// BeforeAll(function () {
//   return driver.manage().window().maximize();
// });

// AfterAll(function () {
//   return driver.quit();
// });

// AfterStep(async function () {
//   await sleep(sleepBetweenSteps);
// });

import { Before, BeforeAll, AfterAll, AfterStep } from '@cucumber/cucumber';
import { sleepBetweenSteps } from '../../config.js';
import { driver } from './world.js';
import { Builder } from 'selenium-webdriver';

const sleep = ms => new Promise( res => setTimeout( res, ms ) );

// Variable to store the current driver
let currentDriver;

// Initialize the driver before all scenarios
BeforeAll( async function () {
  currentDriver = await new Builder().forBrowser( 'chrome' ).build();
  await currentDriver.manage().window().maximize();
} );

// Terminate the driver after all scenarios
AfterAll( async function () {
  await currentDriver.quit();
} );

// Initialize a new driver before each scenario
Before( async function () {
  // If a driver already exists, terminate it
  if ( currentDriver ) {
    await currentDriver.quit();
  }
  // Create a new instance of the driver
  currentDriver = await new Builder().forBrowser( 'chrome' ).build();
} );

// Set a delay between steps
AfterStep( async function () {
  await sleep( sleepBetweenSteps );
} );

// Export the current driver for use in steps
export { currentDriver as driver };
