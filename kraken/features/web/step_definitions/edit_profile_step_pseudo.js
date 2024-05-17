const {Given, When, Then} = require('@cucumber/cucumber');
const ProfilePageObject = require('../support/ProfilePageObject');
const utils = require('../support/utils')

var TEMP_NAME = ''

When('I change full name with a requested value {string} {string}', async function (scenario, step) {
  let profilePO = new ProfilePageObject(this.driver)
  let users = await utils.getDataJson('https://my.api.mockaroo.com/users.json?key=86bc46c0')
  const randomNumber = Math.floor(Math.random() * users.length); 
  TEMP_NAME = users[randomNumber]["full_name"]
  await profilePO.changeProfile(TEMP_NAME)
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
  await profilePO.saveAndClose()
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
})

Then('I verify my name changes {string} {string}', async function (scenario, step) {
  const expect = (await import('expect-webdriverio')).expect
  let button = await this.driver.$('//*[@id="admin-x-settings-scroller"]/div/div[1]/div/div[9]/div[3]/div[2]/span[1]')
  await expect(button).toHaveTextContaining([TEMP_NAME])
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
}) 
