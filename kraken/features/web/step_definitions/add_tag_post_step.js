const { Given, When, Then } = require('@cucumber/cucumber');
const utils = require('../support/utils')
const {expect} = require('chai');
const PagePostPageObject = require('../support/PagePostPageObject');
const { elementRender } = require('../support/elements');

When('I add a new tag named {string}', async function(tag) {
    let postPO = new PagePostPageObject(this.driver)
    await postPO.addTag(tag)  
    await postPO.saveChanges()
    await postPO.back()
})

Then('I verify the post tag {string}', async function(tag) {
    let elements = elementRender
    const pMeta = await utils.getPostMetadata(this.driver, elements)
    var matches = true
    for (item of pMeta) {
        const text = await item.getElementText(item.elementId)
        matches = matches || text == tag
    }
    expect(matches).to.equal(true)
})


