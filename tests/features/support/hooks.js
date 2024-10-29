import { BeforeAll, AfterAll, AfterStep } from '@cucumber/cucumber';
import { sleepBetweenSteps } from '../../config.js';
import { driver } from './world.js';

const sleep = ms => new Promise(res => setTimeout(res, ms));

// BeforeAll(function () {
//   return driver.manage().window().maximize();
// });

BeforeAll( async function () {
  try {
    console.log( "Starting driver..." );
    await driver.manage().window().maximize();
    console.log( "Driver started and window maximized." );
  } catch ( error ) {
    console.error( "Error during BeforeAll hook:", error );
    throw error; 
  }
} );

AfterAll(function () {
  return driver.quit();
});

AfterStep(async function () {
  await sleep(sleepBetweenSteps);
});
