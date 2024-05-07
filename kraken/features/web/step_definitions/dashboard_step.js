const {Given, When, Then} = require('@cucumber/cucumber');
const ProfilePageObject = require('../support/ProfilePageObject');
const DashboardPageObject = require('../support/DashboardPageObject');
const properties = require('../../properties.json')


When('I open profile {string} {string}', async function (scenario, step) {
  let profilePO = new ProfilePageObject(this.driver)
  await profilePO.clickOnAvatar()
  await profilePO.openProfile()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}.png`)

});


When('I click avatar icon {string} {string}', async function (scenario, step) {
  let profilePO = new ProfilePageObject(this.driver)
  await profilePO.clickOnAvatar()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}.png`)
})

When('I open pages {string} {string}', async function (scenario, step) {
  let dashboardPO = new DashboardPageObject(this.driver)
  await dashboardPO.openPages()
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
  await this.driver.pause(2000)
  await dashboardPO.startNewPage()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
})


When('I return to dashboard {string} {string}', async function (scenario, step) {
  await this.driver.url(properties['<URL>'])
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
})


