import seleniumWebdriver, { By } from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, browser, headless } from '../../config.js';
import chrome from 'selenium-webdriver/chrome.js';

const options = new chrome.Options();
headless && options.addArguments('--headless=new');

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
      until.elementLocated(By.css(cssSelector)), maxTimeWaitMs);
  }

  async getByXPathWait(xPath, maxTimeToWaitMs = 5000) {
    return await this.driver.wait(
      until.elementLocated(By.xpath(xPath)), maxTimeWaitMs);
  }

}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);