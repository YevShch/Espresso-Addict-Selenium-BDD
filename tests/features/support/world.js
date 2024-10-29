import seleniumWebdriver, { By, until } from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, browser, headless } from '../../config.js';
import chrome from 'selenium-webdriver/chrome.js';

const GITHUB_ACTIONS = process.env[ 'GITHUB_ACTIONS' ] === 'true';

const options = new chrome.Options();
// Run headless if config says so or if we are running in GitHub actions 
( headless || GITHUB_ACTIONS ) && options.addArguments( '--headless=new' );



export const driver = new seleniumWebdriver
  .Builder()
  .setChromeOptions(options)
  .forBrowser(browser)
  .build();

class CustomWorld {
  constructor() {
    this.driver = driver;
  }

  async get(cssSelector) {
    return await this.driver.findElement(By.css(cssSelector));
  }

  async getMany(cssSelector) {
    return await this.driver.findElements(By.css(cssSelector));
  }

  async getByXPath(xPath) {
    return await this.driver.findElement(By.xpath(xPath));
  }

  async getManyByXPath(xPath) {
    return await this.driver.findElements(By.xpath(xPath));
  }

  async getWait(cssSelector, maxTimeToWaitMs = 5000) {
    return await this.driver.wait(
      until.elementLocated(By.css(cssSelector)), maxTimeToWaitMs);
  }

  async getByXPathWait(xPath, maxTimeToWaitMs = 5000) {
    return await this.driver.wait(
      until.elementLocated(By.xpath(xPath)), maxTimeToWaitMs);
  }

}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);
