const BasePageObject = require("./BasePageObject");
const utils = require('./utils')
class DashboardPageObject extends BasePageObject {

  constructor(driver) {
    super(driver);
  }


  async startNewPost() {
    const newPostButton = await this.driver.$(this.elementsSearch.newPostBtn)
    await newPostButton.click()
  }

  async openFirstPublishedPost() {
    const navElement = this.driver.$('a[title="Published"]')
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