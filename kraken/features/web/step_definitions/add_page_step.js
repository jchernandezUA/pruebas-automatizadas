const {Given, When, Then} = require('@cucumber/cucumber');
const PagePostPageObject = require('../support/PagePostPageObject');
const utils = require('../support/utils');

When('I add a new page with title {string}', async function (title) {
  let pagePO = new PagePostPageObject(this.driver)
  await pagePO.createNewPost(title)
  await pagePO.pubishPost()
})

Then('I verify the published message', async function () {
  let publishDiv = await utils.waitForElementDisplayed(
    this.driver,
    'div.gh-publish-title'
  )
  let span = await publishDiv.$('span')
  let text = await this.driver.getElementText(span.elementId)
  expect(text).to.equal('Boom. It’s out there.')
})

