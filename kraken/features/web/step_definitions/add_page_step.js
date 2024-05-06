const {Given, When, Then} = require('@cucumber/cucumber');
const PagePostPageObject = require('../support/PagePostPageObject');
const utils = require('../support/utils');

When('I add a new page with title {string}', async function (title) {
  let pagePO = new PagePostPageObject(this.driver)
  await pagePO.createNewPost(title)
  await pagePO.pubishPost()
})

Then('I verify the published message', async function () {
  const expect = (await import('expect-webdriverio')).expect;
  let publishDiv = await utils.waitForElementDisplayed(
    this.driver,
    'div.gh-publish-title'
  )
  let span = await publishDiv.$('span')
  await expect(span).toHaveText('Boom. It’s out there.')
})

