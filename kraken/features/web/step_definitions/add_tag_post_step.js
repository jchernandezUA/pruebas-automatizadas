const {Given, When, Then} = require('@cucumber/cucumber');
const utils = require('../support/utils')
const PagePostPageObject = require('../support/PagePostPageObject');
const {elementRender} = require('../support/elements');

When('I add a new tag named {string}', async function (tag) {
  let postPO = new PagePostPageObject(this.driver)
  await postPO.addTag(tag)
  await postPO.saveChanges()
  await postPO.back()
})

Then('I verify the post tag {string}', async function(tag) {
  const expect = (await import('expect-webdriverio')).expect;
  let elements = elementRender
  const pMeta = await utils.getPostMetadata(this.driver, elements)
  for (item of pMeta) {
    const text = await item.getElementText(item.elementId)
    if (text == tag) {
      return await expect(item).toHaveText(tag)
    }
  }
  throw Error('not finding mathces')
})


