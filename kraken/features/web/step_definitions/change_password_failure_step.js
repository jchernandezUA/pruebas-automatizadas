const {Given, When, Then} = require('@cucumber/cucumber');
const utils = require('../support/utils')
const ProfilePageObject = require('../support/ProfilePageObject');
const properties = require('../../properties.json');
const {getEnvElements} = require('../support/elements');

When('I change the password to a requested value {string} {string}', async function (scenario, step) {
  let profilePageObject = new ProfilePageObject(this.driver)
  let passwords = await utils.getDataJson('https://my.api.mockaroo.com/incorrect_passwords.json?key=86bc46c0')
  const randomNumber = Math.floor(Math.random() * passwords.length); 
  await profilePageObject.changePassword(
    properties['<GHOST_PASSWORD>'],
    passwords[randomNumber]["incorrect_password"],
  )
  await profilePageObject.clickChangePassword()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
});

Then('I validate the error on password {string} {string}', async function (scenario, step) {
  const expect = (await import('expect-webdriverio')).expect;
  let error = await this.driver.$('//*[@id="modal-backdrop"]/section/div[1]/div/div[2]/div[4]/div[3]/span')
  await expect(error).toBeDisplayed();
  return await this.driver.pause(2000)
});