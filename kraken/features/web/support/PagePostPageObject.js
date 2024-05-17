const BasePageObject = require("./BasePageObject");
const utils = require('./utils')

class PagePostPageObject extends BasePageObject {

  constructor(driver) {
    super(driver);
  }

  async createNewPost(title) {
    const textArea = await this.driver.$('textarea')
    await textArea.setValue(title)
    const contentElement = await this.driver.$('p[data-koenig-dnd-droppable="true"]')
    await contentElement.click()
  }

  async pubishPost() {
    await this.driver.pause(1000)
    const publishButton = await utils.findElementByText(this.driver, 'span', 'Publish')
    await publishButton.click()
    const continueButton = await this.driver.$(this.elementsSearch.continueBtn)
    await continueButton.click()
    const publishNowBtn = await this.driver.$(this.elementsSearch.publishNowBtn)
    await publishNowBtn.click()
  }


  async pubishLongPage() {
    await this.driver.pause(1000)
    const publishButton = await utils.findElementByText(this.driver, 'span', 'Publish')
    await publishButton.click()
  }


  async addTag(tag) {
    const inputSearch = 'input.ember-power-select-trigger-multiple-input'
    const listInput = await utils.waitForElementsDisplayed(this.driver, inputSearch)
    await listInput[0].setValue(tag)
    await listInput[0].keys('Enter')
  }

  async saveChanges() {
    const updateBtn = await utils.waitForElementDisplayed(
      this.driver,
      this.elementsSearch.updateBtn
    )
    await updateBtn.click()
  }

  async deleteTag() {
    const inputTag = await utils.waitForElementDisplayed(this.driver, '#tag-input')
    await inputTag.click()
    await inputTag.keys('Backspace')
  }

  async openPostSettings() {
    const settingsButton = await this.driver.$(this.elementsSearch.postSettingsBtn)
    await settingsButton.click()
  }

  async back() {
    const postsBtn = await this.driver.$('a[href="#/posts/?type=published"')
    await postsBtn.click()
  }
}

module.exports = PagePostPageObject;