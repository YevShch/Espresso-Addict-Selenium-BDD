import { BeforeAll, AfterAll, AfterStep } from '@cucumber/cucumber';
import { sleepBetweenSteps } from '../../config.js';
import { driver } from './world.js';

const sleep = ms => new Promise(res => setTimeout(res, ms));

// BeforeAll(function () {
//   return driver.manage().window().maximize();
// });

BeforeAll( async () => {
  const options = new chrome.Options();
  options.addArguments( '--headless' ); // Run in headless mode
  options.addArguments( '--no-sandbox' ); // Needed for GitHub Actions
  options.addArguments( '--disable-dev-shm-usage' ); // Prevent issues with /dev/shm
  options.addArguments( '--disable-gpu' ); // Disable GPU acceleration

  global.driver = await new Builder()
    .forBrowser( 'chrome' )
    .setChromeOptions( options )
    .build();
} );;

AfterAll(function () {
  return driver.quit();
});

AfterStep(async function () {
  await sleep(sleepBetweenSteps);
});
