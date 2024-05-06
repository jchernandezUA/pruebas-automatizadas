const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on member in delete', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]/a')
    return await element.click();
});

When('I click on the member that I want to delete', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]')
    return await element.click();
});

When('I click in settings of member', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/header/section/span/button')
    return await element.click();
});


When('I click in delete member', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/header/section/span/ul/li[3]/button')
    return await element.click();
});

When('I click in accept delete of member', async function () {
    let element = await this.driver.$('/html/body/div[5]/div/div/div[2]/button[2]')
    return await element.click();
});

Then('I find the member that has been removed {string}', async function (expectedText) {
    
    const expect = (await import('expect-webdriverio')).expect;

    let label = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]');
    await expect(label).not.toHaveText(expectedText)
});

