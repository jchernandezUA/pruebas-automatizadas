const { Given, When, Then } = require('@cucumber/cucumber');
const FilterMemberObject = require('../support/FilterMemberObject');
const DeleteMemberPage = require('./../support/DeleteMemberObject');
 

Given('I am on the members page, create a member that I want to filter', async function () {
    const filterMemberObject = new FilterMemberObject(this.driver);
    await filterMemberObject.clickOnMembers();
    await filterMemberObject.clickOnNewMember();
    await filterMemberObject.enterName();
    await filterMemberObject.enterEmail();
    await filterMemberObject.enterNote();
    await filterMemberObject.clickSave();
});

When('I proceed to filter a member that dont exist {string} {string}', async function  (scenario, step) {
    const filterMemberObject = new FilterMemberObject(this.driver);
    await filterMemberObject.clickOnMembers();
    await filterMemberObject.enterFilter();
    await filterMemberObject.clickNameFilter();
    await filterMemberObject.clickLabelFilter();
    await filterMemberObject.clickContainFilter();
    await filterMemberObject.enterFilterText();
    await filterMemberObject.waitFor()
    await filterMemberObject.clickAplicateFilter();
    await this.driver.pause(1000)
    await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
});

Then('I find the member that dont exist {string} {string}', async function  (scenario, step) {
    const expect = (await import('expect-webdriverio')).expect;
    let label = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/a');
    await expect(label).toExist()
    await this.driver.pause(1000)
    await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`)
});

Then('I delete member that has been create to filter', async function (){
    const filterMemberObject = new FilterMemberObject(this.driver);
    const deleteMemberPage = new DeleteMemberPage(this.driver);
    await filterMemberObject.waitFor()
    await filterMemberObject.clickCleanFilter();
    await deleteMemberPage.clickOnMembers();
    await deleteMemberPage.clickOnMemberOptions();
    await deleteMemberPage.clickInSettingsOfMember();
    await deleteMemberPage.clickDeleteMember();
    await deleteMemberPage.acceptDelete();
})
