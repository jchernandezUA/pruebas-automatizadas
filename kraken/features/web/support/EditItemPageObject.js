const BasePageObject = require("./BasePageObject");

class EditItemPageObject extends BasePageObject {

  constructor(driver) {
    super(driver);
  }

  async editLabel(label) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/section/div[2]/div/div/div[1]/div/div[3]/div/div[1]/div/div/input');
    await element.waitForDisplayed();
    element.value = '';
    await element.setValue(label);
  }
}

module.exports = EditItemPageObject;