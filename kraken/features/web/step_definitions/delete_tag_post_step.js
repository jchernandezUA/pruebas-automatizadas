const {Given, When, Then} = require('@cucumber/cucumber');
const utils = require('../support/utils')
const PagePostPageObject = require('../support/PagePostPageObject')

When('I erase the tag {string} {string}', async function (scenario, step) {
  let postPO = new PagePostPageObject(this.driver)
  await postPO.deleteTag()
  await postPO.saveChanges()
  await postPO.back()
  await this.driver.pause(1000)
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
})

Then('I verify that there is no post tag {string} {string} {string}', async function (tag, scenario, step) {
  const expect = (await import('expect-webdriverio')).expect;
  const pMeta = await utils.getPostMetadata(this.driver)
  for (item of pMeta) {
    await expect(item).not.toHaveText(tag)
    return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
  }
}) 