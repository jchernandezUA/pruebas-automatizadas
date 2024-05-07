const {Given, When, Then} = require('@cucumber/cucumber');
const DashboardPageObject = require('../support/DashboardPageObject')
const PagePostPageObject = require('../support/PagePostPageObject')

When('I open the recent post {string} {string}', async function (scenario, step) {
  let dashboardPO = new DashboardPageObject(this.driver)
  dashboardPO.openFirstPublishedPost()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}.png`)
})


When('I open the post settings {string} {string}', async function (scenario, step) {
  let postPO = new PagePostPageObject(this.driver)
  await postPO.openPostSettings()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}.png`)
})

When('I save the updated post {string} {string}', async function (scenario, step) {
  let postPO = new PagePostPageObject(this.driver)
  await postPO.saveChanges()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}.png`)
})