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
  const pMeta = await utils.getPostMetadata(this.driver)
  for (item of pMeta) {
    const text = await item.getElementText(item.elementId)
    expect(text).to.not.equal(tag)
  }
}) 