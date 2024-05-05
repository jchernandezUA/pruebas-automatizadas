const {Given, When, Then} = require('@cucumber/cucumber');
const DashboardPageObject = require('../support/DashboardPageObject')
const PagePostPageObject = require('../support/PagePostPageObject')

When('I open the recent post', async function () {
  let dashboardPO = new DashboardPageObject(this.driver)
  dashboardPO.openFirstPublishedPost()
})


When('I open the post settings', async function () {
  let postPO = new PagePostPageObject(this.driver)
  await postPO.openPostSettings()
})

When('I save the updated post', async function () {
  let postPO = new PagePostPageObject(this.driver)
  await postPO.saveChanges()
})