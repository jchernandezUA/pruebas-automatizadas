const {Given, When, Then} = require('@cucumber/cucumber');
const utils = require('../support/utils')
const PagePostPageObject = require('../support/PagePostPageObject');
const {elementRender} = require('../support/elements');

When('I add a new tag named {string} {string} {string}', async function (tag, scenario, step) {
  let postPO = new PagePostPageObject(this.driver)
  await postPO.addTag(tag)
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
  await postPO.saveChanges()
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
  await postPO.back()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`)
})

Then('I verify the post tag {string} {string} {string}', async function(tag, scenario, step) {
  const expect = (await import('expect-webdriverio')).expect;
  let elements = elementRender
  const pMeta = await utils.getPostMetadata(this.driver, elements)
  for (item of pMeta) {
    const text = await item.getElementText(item.elementId)
    if (text == tag) {
      await expect(item).toHaveText(tag)
      return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
    }
  }
  throw Error('not finding mathces')
})


