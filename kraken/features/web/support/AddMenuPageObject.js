const BasePageObject = require("./BasePageObject");
const properties = require('../../properties.json');

class AddMenuPageObject extends BasePageObject {

  constructor(driver) {
    super(driver);
  }

  async clickSettingsIcon() {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[2]/a');
    await element.waitForClickable();
    return await element.click();
  }

  async clickNavigationCustomizeButton() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/button');
    await element.waitForClickable();
    return await element.click();
  }

  async enterNewLabel(label) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/section/div[2]/div/div/div[2]/div/div[1]/div/div/input');
    await element.waitForDisplayed();
    return await element.setValue(label);
  }

  async editLabel(label) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/section/div[2]/div/div/div[1]/div/div[3]/div/div[1]/div/div/input');
    await element.waitForDisplayed();
    return await element.setValue(label);
  }

  async clickNavigationCustomizeOkButton() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[2]/div[2]/div/div[2]/div/button[2]');
    await element.waitForClickable();
    return await element.click();
  }

  async goToHomepage() {
    await this.driver.url(properties['<URL_HOME>']);
  }

  async seeTheNewItemMenu(expectedText) {
    const expect = (await import('expect-webdriverio')).expect;
    let label = await this.driver.$('/html/body/div[1]/header/div/nav/ul/li[3]/a');
    await expect(label).toBeDisplayed();
    await expect(label).toHaveText(expectedText);
    await expect(label).toHaveHref(`${properties['<URL_HOME>']}/`);
  }

  async goToAdminPage() {
    await this.driver.url(`${properties['<URL>']}`);
  }

  async deleteItemMenu() {
    let el = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/section/div[2]/div/div/div[1]/div/div[3]/div/button');
    await el.waitForClickable();
    return await el.click();
  }

}

module.exports = AddMenuPageObject;