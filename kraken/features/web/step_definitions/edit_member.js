const { Given, When, Then } = require('@cucumber/cucumber');
const EditMemberObject = require('../support/EditMemberObject');
const DeleteMemberPage = require('./../support/DeleteMemberObject');



Given('I am on the members page, create a member that I want to edit', async function () {
    const editMemberObject = new EditMemberObject(this.driver);
    await editMemberObject.clickOnMembers();
    await editMemberObject.clickOnNewMember();
    await editMemberObject.enterName();
    await editMemberObject.enterEmail();
    await editMemberObject.enterNote();
    await editMemberObject.clickSave();
});

When('I proceed to edit a member {string} {string}', async function (scenario, step) {
    const editMemberObject = new EditMemberObject(this.driver);
    await editMemberObject.clickOnMembers();
    await editMemberObject.clickOnMemberOptions();
    await editMemberObject.enterNameEdit();
    await editMemberObject.enterEmailEdit();
    await editMemberObject.enterNoteEdit();
    await this.driver.pause(1000)
    await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
    await editMemberObject.clickSave();
});

Then('the member edit name should be {string} {string} {string}', async function (expectedText, scenario, step) {
    const editMemberObject = new EditMemberObject(this.driver);
    await editMemberObject.clickOnMembers();
    const expect = (await import('expect-webdriverio')).expect;
    let label = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]/div/div/h3');
    await expect(label).toHaveText(expectedText);
    await this.driver.pause(1000)
    await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`)
});

Then('I delete member that has been edit', async function (){
    const deleteMemberPage = new DeleteMemberPage(this.driver);
    await deleteMemberPage.clickOnMembers();
    await deleteMemberPage.clickOnMemberOptions();
    await deleteMemberPage.clickInSettingsOfMember();
    await deleteMemberPage.clickDeleteMember();
    await deleteMemberPage.acceptDelete();
})