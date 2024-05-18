const {Given, When, Then} = require('@cucumber/cucumber');
const utils = require('../support/utils')
const ProfilePageObject = require('../support/ProfilePageObject');
const properties = require('../../properties.json');
const {getEnvElements} = require('../support/elements');

//random - a priori
When('I change the password to {kraken-string} {string} {string}', async function (password, scenario, step) {
  let profilePageObject = new ProfilePageObject(this.driver)
  await profilePageObject.changePassword(
    properties['<GHOST_PASSWORD>'],
    password,
  )
  await profilePageObject.clickChangePassword()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
});

Then('I validate the password changed {string} {string}', async function (scenario, step) {
  const expect = (await import('expect-webdriverio')).expect;
  let elements = getEnvElements()
  let text = elements.passwordUpdated
  const span = await utils.findElementByText(this.driver, 'span', text)
  await expect(span).toHaveText(text)
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
  await this.driver.pause(1000)
});

Then('I reset the password {kraken-string}', async function (currentPassword) {
  const expect = (await import('expect-webdriverio')).expect;
  //Teardown
  let profilePageObject = new ProfilePageObject(this.driver)
  await profilePageObject.saveAndClose()
  await this.driver.pause(2000)
  let profileBtn = await this.driver.$('//*[@id="admin-x-settings-scroller"]/div/div[1]/div/div[9]/div[3]/div[2]/span[1]/button')
  await profileBtn.click()
  await profilePageObject.changePassword(
    currentPassword,
    properties['<GHOST_PASSWORD>']
  )
  await profilePageObject.clickChangePassword()
  await this.driver.pause(3000)
});