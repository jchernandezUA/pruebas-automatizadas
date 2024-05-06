const BasePageObject = require("./BasePageObject");

class SitePrivatePageObject extends BasePageObject {

  constructor(driver) {
    super(driver);
  }

  async clickSitePrivateButton() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[8]/div[2]/div[2]/div/button');
    return await element.click();
  }

  async switchPrivate() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[8]/div[3]/div/div/input');
    return await element.click();
  }

  async setPrivatePassword(label) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[8]/div[3]/div[2]/div/input');
    element.value = '';
    await element.setValue(label);
  }

  async clickSavePrivateButton() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[8]/div[2]/div[2]/div/button[2]');
    return await element.click();
  }

}

module.exports = SitePrivatePageObject;