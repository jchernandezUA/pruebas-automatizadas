const BasePageObject = require("./BasePageObject");

class EditItemPageObject extends BasePageObject {

  constructor(driver) {
    super(driver);
  }

  async UpdateLabel(label) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/section/div[2]/div/div/div[1]/div/div[3]/div/div[1]/div/div/input');
    await element.waitForDisplayed();

    await element.setValue('');
    const valueLength = (await element.getValue()).length;
    for (let i = 0; i < valueLength; i++) {
      await element.keys(['Backspace']);
    }
    await this.driver.pause(100);

    await element.setValue(label);
  }
}

module.exports = EditItemPageObject;