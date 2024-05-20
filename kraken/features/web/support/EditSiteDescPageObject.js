const BasePageObject = require("./BasePageObject");

class EditSiteDescPageObject extends BasePageObject {

  constructor(driver) {
    super(driver);
  }

  async clickDescButton() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[1]/div[2]/div[2]/div/button');
    await element.waitForClickable();
    return await element.click();
  }

  async editDescription(label) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[1]/div[3]/div[2]/div/input');
    await element.waitForDisplayed();
    element.value = '';
    await element.setValue(label);
  }

  async clickSaveDescButton() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[1]/div[2]/div[2]/div/button[2]');
    await element.waitForClickable();
    return await element.click();
  }

}

module.exports = EditSiteDescPageObject;