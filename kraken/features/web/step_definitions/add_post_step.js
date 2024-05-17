const {Given, When, Then} = require('@cucumber/cucumber');
const DashboardPageObject = require('../support/DashboardPageObject');
const PagePostPageObject = require('../support/PagePostPageObject');

When('I add a new post with title {kraken-string} {string} {string}', async function (title, scenario, step) {

  let dashboardPO = new DashboardPageObject(this.driver)

  await dashboardPO.startNewPost()
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)

  let postPO = new PagePostPageObject(this.driver)

  await postPO.createNewPost(title)
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
  await postPO.pubishPost()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`)
})