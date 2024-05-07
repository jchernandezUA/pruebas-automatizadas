const {Given, When, Then} = require('@cucumber/cucumber');
const ProfilePageObject = require('../support/ProfilePageObject');


When('I change full name {string} {string}', async function (scenario, step) {
  let profilePO = new ProfilePageObject(this.driver)
  await profilePO.changeName('_CH_')
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
  await profilePO.saveAndClose()
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
  await this.driver.pause(10000)
  await profilePO.back()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`)
})


Then('I verify my name contains {string} {string} {string}', async function (text, scenario, step) {
  const expect = (await import('expect-webdriverio')).expect
  let nameElement = await this.driver.$('h4.gh-user-name')
  let value = await nameElement.getText()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
}) 
