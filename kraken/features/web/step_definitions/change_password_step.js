const { Given, When, Then } = require('@cucumber/cucumber');
const utils = require('./utils')

When('I scroll to the element with text {string}', async function (text) {
    let item = await utils.findElementByText(this.driver, 'span', text)
    return item.scrollIntoView()
});

When('I click to the element with text {string}', async function (text) {
    let item = await utils.findElementByText(this.driver, 'span', text)

    return await item.click()
});

When('I enter current password {string}', async function (password) {
    let inputs = await this.driver.$$('input[type="password"]')
    return await inputs[0].setValue(password)
})


When('I enter new password {string}', async function (password) {
    let inputs = await this.driver.$$('input[type="password"]')
    return await inputs[1].setValue(password)
})


When('I enter verify password {string}', async function (password) {
    let inputs = await this.driver.$$('input[type="password"]')
    return await inputs[2].setValue(password)
});

When('I click to the button with title Close', async function () {
    let button = await this.driver.$('button[title="Close (ESC)"]')
    await button.click()
});

Then('I validate the text {string}', async function (text) {
    const span =  await utils.findElementByText(this.driver, 'span', text)
    if (span == null) {
        throw new Error(`Error al validar el texto "${text}"`);
    }
});