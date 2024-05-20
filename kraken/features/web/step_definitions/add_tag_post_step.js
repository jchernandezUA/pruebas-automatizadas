const {Given, When, Then} = require('@cucumber/cucumber');
const utils = require('../support/utils')
const PagePostPageObject = require('../support/PagePostPageObject');
const {elementRender} = require('../support/elements');

When('I add a new tag named {kraken-string} {string} {string}', async function (tag, scenario, step) {
  let postPO = new PagePostPageObject(this.driver)
  await postPO.addTag(tag)
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
  await postPO.saveChanges()
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
  await postPO.back()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`)
})

Then('I verify the post tag {kraken-string} {string} {string}', async function(tag, scenario, step) {
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
  throw Error('not finding mathces '+tag)
})


Then('I clean the post with name {kraken-string}', async function(title) {
  let item = await utils.findElementByText(this.driver, 'h3', title)
  await item.click()
  let postPO = new PagePostPageObject(this.driver)
  postPO.openPostSettings()
  let deleteItem = await this.driver.$('button.gh-btn.gh-btn-outline.gh-btn-icon.gh-btn-fullwidth')
  await deleteItem.click()
  let deleteBtn = await utils.findElementByText(this.driver, 'span', 'Delete')
  await deleteBtn.click()
})

Then('I verify the tag error {string} {string}', async function(step, scenario) {
  const expect = (await import('expect-webdriverio')).expect;
  let alertItem = await this.driver.$('div.gh-alert-content')
  await expect(alertItem).toHaveText('Validation error, cannot edit post. Validation failed for name.')
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
  let back = await utils.findElementByText(this.driver, 'span', 'Posts')
  let leaveBtn = await utils.findElementByText(this.driver, 'span', 'Leave')
  await leaveBtn.click()
});