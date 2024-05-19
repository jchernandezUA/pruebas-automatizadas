const BasePageObject = require("./BasePageObject");
const utils = require('./utils')
const properties = require('../../properties.json');

class DashboardPageObject extends BasePageObject {

  constructor(driver) {
    super(driver);
  }

  async clickSettingsIcon() {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[2]/a');
    await element.waitForClickable();
    return await element.click();
  }

  async goToHomepage() {
    await this.driver.url(properties['<URL_HOME>']);
  }

  async goToAdminPage() {
    await this.driver.url(`${properties['<URL>']}`);
  }

  async startNewPost() {
    const newPostButton = await this.driver.$(this.elementsSearch.newPostBtn)
    await newPostButton.click()
  }

  async openFirstPublishedPost() {
    const navElement = await this.driver.$('a[title="Published"]')
    await navElement.click()
    const selectorSearch = this.elementsSearch.selectorSearch
    const listPost = await utils.waitForElementsDisplayed(this.driver, selectorSearch)
    await listPost[0].click()
  }

  async openPages() {
    const navElement = await utils.waitForElementDisplayed(
      this.driver,
      this.elementsSearch.pagesItem)
    await navElement.click()
  }

  async startNewPage() {
    const newBtn = await utils.waitForElementDisplayed(this.driver, this.elementsSearch.newPage)
    await newBtn.click()
  }

}

module.exports = DashboardPageObject;