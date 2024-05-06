const BasePageObject = require("./BasePageObject");

class EditSiteLangPageObject extends BasePageObject {

  constructor(driver) {
    super(driver);
  }

  async clickLangButton() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[3]/div[2]/div[2]/div/button');
    return await element.click();
  }

  async editLanguage(label) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[3]/div[3]/div/div/input');
    element.value = '';
    await element.setValue(label);
  }

  async clickSaveLangButton() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[3]/div[2]/div[2]/div/button[2]');
    return await element.click();
  }

}

module.exports = EditSiteLangPageObject;