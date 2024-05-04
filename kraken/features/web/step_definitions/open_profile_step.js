const { Given, When, Then } = require('@cucumber/cucumber');

When('I click avatar icon', async function() {
    let element = await this.driver.$('div.gh-user-avatar.relative')
    return await element.click()
});

When('I click the profile item', async function() {
    let element = await this.driver.$('a[data-test-nav="user-profile"]')
    return await element.click()
});