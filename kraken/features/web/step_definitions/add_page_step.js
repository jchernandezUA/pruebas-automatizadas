const {Given, When, Then} = require('@cucumber/cucumber');
const PagePostPageObject = require('../support/PagePostPageObject');
const utils = require('../support/utils');

When('I add a new page with title {string} {string} {string}', async function (title, scenario, step) {
  let pagePO = new PagePostPageObject(this.driver)
  await pagePO.createNewPost(title)
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
  await pagePO.pubishPost()
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`)
})

Then('I verify the published message {string} {string}', async function (scenario, step) {
  const expect = (await import('expect-webdriverio')).expect;
  let publishDiv = await utils.waitForElementDisplayed(
    this.driver,
    'div.gh-publish-title'
  )
  let span = await publishDiv.$('span')
  await expect(span).toHaveText('Boom. It’s out there.')
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}.png`)
})

