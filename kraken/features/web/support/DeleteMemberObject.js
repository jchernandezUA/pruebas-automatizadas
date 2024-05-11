const ActionMemberObject = require('./ActionMemberObject');

class DeleteMemberObject extends ActionMemberObject {
    async clickInSettingsOfMember() {
        const element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/header/section/span/button');
        return element.click();
    }

    async clickDeleteMember() {
        const element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/header/section/span/ul/li[3]/button');
        return element.click();
    }

    async acceptDelete() {
        const element = await this.driver.$('/html/body/div[5]/div/div/div[2]/button[2]');
        return element.click();
    }

    async verifyMemberDeleted() {
        const expect = (await import('expect-webdriverio')).expect;
        const label = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]');
        await expect(label).not.toExist();
    }
}

module.exports = DeleteMemberObject;
