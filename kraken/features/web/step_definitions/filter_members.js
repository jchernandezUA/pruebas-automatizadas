const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on member in filter', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]/a')
    return await element.click();
});

When('I click in filter', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/div[2]/div[1]')
    return await element.click();
});

When('I click on name', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]')
    return await element.click();
});

When('I click on label', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/div/section/div[1]/div/div/span[2]/select')
    return await element.click();
});

When('I click on contain', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/div/section/div[1]/div/div/span[2]/select/option[2]')
    return await element.click();
});

When('I want to filter by name that contain {string}', async function (note) { return await whenEnterNote(this.driver, note) });

async function whenEnterNote(driver, label) {
    let element = await driver.$('/html/body/div[1]/div/div/section/div[1]/div/div/input');
    return await element.setValue(label);
}

When('I click on apply filters', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/div/div/button[2]')
    return await element.click();
});

Then('I find the member that have {string} in the name', async function (expectedText) {
    const expect = (await import('expect-webdriverio')).expect;
    let label = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]');
    await expect(label).not.toHaveText(expectedText)
});


