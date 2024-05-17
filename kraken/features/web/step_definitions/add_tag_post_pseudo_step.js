const {Given, When, Then} = require('@cucumber/cucumber');
const utils = require('../support/utils')
const PagePostPageObject = require('../support/PagePostPageObject');
const {elementRender} = require('../support/elements');

var TEMP_TAG = ''

When('I add a requested tag {string} {string} {string}', async function (name, scenario, step) {
  let postPO = new PagePostPageObject(this.driver)
  let postsData = await utils.getDataJson('https://my.api.mockaroo.com/post_data_json.json?key=86bc46c0')
  const randomNumber = Math.floor(Math.random() * postsData.length); 
  TEMP_TAG = postsData[randomNumber][name]
  await postPO.addTag(TEMP_TAG)
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
  await postPO.saveChanges()
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
  await postPO.back()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`)
})

Then('I verify the requested tag {string} {string}', async function(scenario, step) {
  const expect = (await import('expect-webdriverio')).expect;
  let elements = elementRender
  const pMeta = await utils.getPostMetadata(this.driver, elements)
  for (item of pMeta) {
    const text = await item.getElementText(item.elementId)
    if (text == TEMP_TAG) {
      await expect(item).toHaveText(TEMP_TAG)
      return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
    }
  }
  throw Error('not finding mathces')
})