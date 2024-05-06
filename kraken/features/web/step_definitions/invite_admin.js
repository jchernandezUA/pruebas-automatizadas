const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on member to new admin', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]/a')
    return await element.click();
});

When('I click on setting to invite new admin', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[2]/a')
    return await element.click();
});

When('I click on staff', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[1]/div/div/nav/ul[1]/li[9]/a')
    return await element.click();
});


When('I click on invite people', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[9]/div[2]/div[2]/button')
    return await element.click();
});

When('I enter new email to invite new admin {string}', async function (email) { return await whenEnterEmail(this.driver, email) });

async function whenEnterEmail(driver, label) {
    let element = await driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[1]/div/input');   
    return await element.setValue(label);
}

When('I click on administrator', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div/div/label[4]/input')
    return await element.click();
});

When('I click on send invitation now', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[2]/div[2]/div/button')
    return await element.click();
});

When('I click on back', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[2]')
    return await element.click();
});

When('I click on invited', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[9]/section/div[1]/div[5]/button')
    return await element.click();
});

Then('I find the email {string}', async function (expectedText) {
    
    const expect = (await import('expect-webdriverio')).expect;

    let label = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[9]/section/div[6]/div/section/div/div[2]/div[1]/div[2]/span[1]');
    await expect(label).not.toBeDisplayed();
});

