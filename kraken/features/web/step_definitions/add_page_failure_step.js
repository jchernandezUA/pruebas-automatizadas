const {Given, When, Then} = require('@cucumber/cucumber');
const PagePostPageObject = require('../support/PagePostPageObject');
const utils = require('../support/utils');

When('I add a new page with a long title {kraken-string} {string} {string}', async function (title, scenario, step) {
  let pagePO = new PagePostPageObject(this.driver)
  await pagePO.createNewPost('short-title')
  await pagePO.createNewPost(title)
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
  await pagePO.pubishLongPage()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`)
})

Then('I verify the lenght error {string} {string}', async function (scenario, step) {
  const expect = (await import('expect-webdriverio')).expect;
  let alert = await this.driver.$('div.gh-alert-content')
  await expect(alert).toHaveText('Validation failed: Title cannot be longer than 255 characters.')
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}.png`)
})

