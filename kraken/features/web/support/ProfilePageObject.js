const properties = require('../../properties.json');
const BasePageObject = require('./BasePageObject');
const utils = require('./utils')

class ProfilePageObject extends BasePageObject {

  constructor(driver) {
    super(driver);
  }

  async clickOnAvatar() {
    let avatarIcon = await this.driver.$('div.gh-user-avatar.relative')
    await avatarIcon.click()
  }

  async openProfile() {
    let profileItem = await this.driver.$(this.elementsSearch.profileItem)
    await profileItem.click()
  }

  async changePassword(currentPassword, newPassword) {
    let changePasswordTxt = await utils.findElementByText(this.driver, 'span', this.elementsSearch.changePassword)
    await changePasswordTxt.scrollIntoView()
    if (this.elementsSearch.isLocal) {
      await changePasswordTxt.click()
    }
    let inputs = await this.driver.$$('input[type="password"]')
    await inputs[0].setValue(currentPassword)
    await inputs[1].setValue(newPassword)
    await inputs[2].setValue(newPassword)
  }

  async clickChangePassword() {
    let item = await utils.findElementByText(this.driver, 'span', this.elementsSearch.changePassword)
    await item.click()
  }

  async changeName(name) {
    await this.driver.pause(2000)
    let inputs = await this.driver.$$('input[type="text"]')
    let nameInput = inputs[this.elementsSearch.fullNamePosition]
    await nameInput.setValue('')
    await nameInput.setValue(name)
  }

  async saveAndClose() {
    let item = await utils.findElementByText(this.driver, 'span', this.elementsSearch.saveClose)
    return await item.click()
  }

  async back() {
    let btn = await utils.waitForElementDisplayed(this.driver, this.elementsSearch.backSettings)
    return await btn.click()
  }

}

module.exports = ProfilePageObject;