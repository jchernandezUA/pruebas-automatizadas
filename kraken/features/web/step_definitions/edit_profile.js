const { Given, When, Then } = require('@cucumber/cucumber');
const {expect} = require('chai');
const ProfilePageObject = require('../support/ProfilePageObject');


When('I change full name', async function() {
    let profilePO = new ProfilePageObject(this.driver)
    await profilePO.changeName('_CH_')
    await profilePO.saveAndClose()
    await this.driver.pause(10000)
    return await profilePO.back()
})


Then('I verify my name contains {string}', async function (text) {
    let nameElement = await this.driver.$('h4.gh-user-name')
    let value = await nameElement.getText()
    expect(value).to.includes(text)
}) 
