const { Given, When, Then } = require('@cucumber/cucumber');
const DeleteMemberPage = require('./../support/DeleteMemberObject');

Given('I am on the members page, create a member that I want to delete', async function () {
    const deleteMemberPage = new DeleteMemberPage(this.driver);
    await deleteMemberPage.clickOnMembers();
    await deleteMemberPage.clickOnNewMember();
    await deleteMemberPage.enterName();
    await deleteMemberPage.enterEmail();
    await deleteMemberPage.enterNote();
    await deleteMemberPage.clickSave();
    
});

When('I proceed to delete a member {string} {string}', async function (scenario, step) {
    const deleteMemberPage = new DeleteMemberPage(this.driver);
    await deleteMemberPage.clickOnMembers();
    await this.driver.pause(1000)
    await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
    await deleteMemberPage.clickOnMemberOptions();
    await deleteMemberPage.clickInSettingsOfMember();
    await deleteMemberPage.clickDeleteMember();
    await deleteMemberPage.acceptDelete();
    await this.driver.pause(1000)
    return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`)
});

Then('the member should be deleted {string} {string} {string}', async function (expectedText, scenario, step) {

    const expect = (await import('expect-webdriverio')).expect;
    const label = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]');
    await expect(label).not.toExist();
    await this.driver.pause(1000)
    return await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_04.png`)
});