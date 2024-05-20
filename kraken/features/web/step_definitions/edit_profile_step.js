const {Given, When, Then} = require('@cucumber/cucumber');
const ProfilePageObject = require('../support/ProfilePageObject');
const utils = require('../support/utils')


/////random 
When('I change full name with a random {kraken-string} {string} {string}', async function (name, scenario, step) {
  let profilePO = new ProfilePageObject(this.driver)
  await profilePO.changeProfile(name)
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
  await profilePO.saveAndClose()
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
})

When('I change profile with {string} {string} {string} {string}',
 async function (name, location, scenario, step) {
  let profilePO = new ProfilePageObject(this.driver)
  await profilePO.changeProfile(name, location)
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
  await profilePO.saveAndClose()
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
})


Then('I verify my name contains {kraken-string} {string} {string}', async function (text, scenario, step) {
  const expect = (await import('expect-webdriverio')).expect
  let button = await this.driver.$('//*[@id="admin-x-settings-scroller"]/div/div[1]/div/div[9]/div[3]/div[2]/span[1]')
  await expect(button).toHaveTextContaining([text])
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
}) 
