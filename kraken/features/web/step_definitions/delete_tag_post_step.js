const {Given, When, Then} = require('@cucumber/cucumber');
const utils = require('../support/utils')
const PagePostPageObject = require('../support/PagePostPageObject')

When('I erase the tag', async function () {
  let postPO = new PagePostPageObject(this.driver)
  await postPO.deleteTag()
  await postPO.saveChanges()
  await postPO.back()
  await this.driver.pause(1000)
})

Then('I verify that there is no post tag {string}', async function (tag) {
  const expect = (await import('expect-webdriverio')).expect;
  const pMeta = await utils.getPostMetadata(this.driver)
  for (item of pMeta) {
    await expect(item).not.toHaveText(tag)
  }
}) 