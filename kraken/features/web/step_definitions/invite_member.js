const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on members', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]/a')
    return await element.click();
});

When('I click on new members button', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/div[2]/a')
    return await element.click();
});

When('I enter new name {string}', async function (name) { return await whenEnterName(this.driver, name) });

async function whenEnterName(driver, label) {
    let element = await driver.$('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[1]/input');
    return await element.setValue(label);
}

When('I enter new email {string}', async function (email) { return await whenEnterEmail(this.driver, email) });

async function whenEnterEmail(driver, label) {
    let element = await driver.$('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/input');   
    return await element.setValue(label);
}

When('I add note {string}', async function (note) { return await whenEnterNote(this.driver, note) });

async function whenEnterNote(driver, label) {
    let element = await driver.$('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[3]/textarea');
    return await element.setValue(label);
}

When('I click on save button', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/header/section/button');
    return await element.click();
});

When('I click on members to validate the new member', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]/a')
    return await element.click();
});

Then('I see the new member {string}', async function (expectedText) {
    // expect => es el assert
    const expect = (await import('expect-webdriverio')).expect;

    let label = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]/div/div/h3');
    await expect(label).toBeDisplayed();
    await expect(label).toHaveHref('http://localhost:2368/')
});