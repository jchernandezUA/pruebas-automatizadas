const { Given, When, Then } = require('@cucumber/cucumber');
const ActionMemberObject = require('../support/ActionMemberObject');
const DeleteMemberPage = require('./../support/DeleteMemberObject');

Given('I am on the members page, create a member {string} {string}', async function (scenario, step) {
    const actionMemberObject = new ActionMemberObject(this.driver);
    await actionMemberObject.clickOnMembers();
    await actionMemberObject.clickOnNewMember();
    await actionMemberObject.enterName();
    await actionMemberObject.enterEmail();
    await actionMemberObject.enterNote();
    await actionMemberObject.clickSave();
    await this.driver.pause(1000)
    await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
});

When('the member name should be {string} {string} {string}', async function (expectedText, scenario, step) {
    const actionMemberObject = new ActionMemberObject(this.driver);
    await actionMemberObject.clickOnMembers();
    const expect = (await import('expect-webdriverio')).expect;
    let label = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]/div/div/h3');
    await expect(label).toHaveText(expectedText);
    await this.driver.pause(1000)
    await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`)
});

Then('I delete member that has been create', async function (){
    const deleteMemberPage = new DeleteMemberPage(this.driver);
    await deleteMemberPage.clickOnMembers();
    await deleteMemberPage.clickOnMemberOptions();
    await deleteMemberPage.clickInSettingsOfMember();
    await deleteMemberPage.clickDeleteMember();
    await deleteMemberPage.acceptDelete();

})