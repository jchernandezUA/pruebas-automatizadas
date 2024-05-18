const {Given, When, Then} = require('@cucumber/cucumber');
const PagePostPageObject = require('../support/PagePostPageObject');
const utils = require('../support/utils');

When('I add a new page with a long requested title {string} {string}', async function (scenario, step) {
  let pagePO = new PagePostPageObject(this.driver)
  let pagesData = await utils.getDataJson('https://my.api.mockaroo.com/page_data_json.json?key=86bc46c0')
  const randomNumber = Math.floor(Math.random() * pagesData.length); 
  let title = pagesData[randomNumber]["long_title"]
  await pagePO.createNewPost('short-title')
  await pagePO.createNewPost(title)
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)
  await pagePO.pubishLongPage()
  return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`)
})