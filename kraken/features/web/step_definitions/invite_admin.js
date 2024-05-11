const { Given, When, Then } = require('@cucumber/cucumber');
const ActionAdminObject = require('../support/ActionAdminObject');


Given('I am admin, i want to invite new admin', async function () {
    const actionAdminObject = new ActionAdminObject(this.driver);
    await actionAdminObject.clickSettingsIcon();

});


When('I proceed to invite a new admin {string} {string}', async function (scenario, step) {
    const actionAdminObject = new ActionAdminObject(this.driver);
    await actionAdminObject.clickStaff();
    await actionAdminObject.clickInvite();
    await actionAdminObject.EnterEmail();
    await actionAdminObject.SelectAdminOption();
    await actionAdminObject.ClickSendInvitation();
    await this.driver.pause(1000)
    await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
});

Then('I find the email {string} {string} {string}', async function (expectedText, scenario, step) {  
    const actionAdminObject = new ActionAdminObject(this.driver);
    await actionAdminObject.backMenu();
    await actionAdminObject.ClickInvited();
    const expect = (await import('expect-webdriverio')).expect;
    let label = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[9]/section/div[6]/div/section/div/div/div[1]/div[2]/span[1]');
    await expect(label).toHaveText(expectedText);
    await this.driver.pause(1000)
    await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`)
});

Then('I delete member invited', async function () {  
    const actionAdminObject = new ActionAdminObject(this.driver);
    await actionAdminObject.DeleteInvited();

});

