const properties = require('../../properties.json')
const BasePageObject = require('./BasePageObject');
const utils = require('./utils')

class LoginPageObject extends BasePageObject {
  constructor(driver) {
    super(driver)
  }

  async goToSignIn() {
    await this.driver.url(properties['<URL>']);
  }

  async setEmail(value) {
    const input = await utils.waitForElementDisplayed(
      this.driver,
      this.elementsSearch.email
    );
    await input.setValue(value);
  }

  async setPassword(value) {
    const input = await utils.waitForElementDisplayed(
      this.driver,
      this.elementsSearch.password
    );
    await input.setValue(value);
  }

  async signIn() {
    const singInBtn = await this.driver.$(this.elementsSearch.signIn);
    return await singInBtn.click();
  }
}

module.exports = LoginPageObject;