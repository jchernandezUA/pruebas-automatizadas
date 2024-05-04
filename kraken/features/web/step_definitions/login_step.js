const { Given, When, Then } = require('@cucumber/cucumber');
const properties = require('../../properties.json')

Given('I login as admin in Ghost with mail', async function() {
    await this.driver.url('http://localhost:2368/ghost')
    await whenEnterEmail(this.driver, properties['<JOSE_MAIL>'])
    await whenEnterPassword(this.driver , properties['<JOSE_PASSWORD>'])
    await whenClickSignIn(this.driver)
})

When('I enter email {string}', async function(email) {return await whenEnterEmail(this.driver, email)});

When('I enter password {string}', async function(password) { return await whenEnterPassword(this.driver, password)});

When('I click sign in', async function() { return whenClickSignIn(this.driver)});

async function whenEnterEmail(driver, email) {
    let element = await driver.$('#identification');
    return await element.setValue(email);
}

async function whenEnterPassword(driver, password) {
    let element = await driver.$('#password');
    return await element.setValue(password);
}

async function whenClickSignIn(driver) {
    let element = await driver.$('#ember5')
    return await element.click()
}