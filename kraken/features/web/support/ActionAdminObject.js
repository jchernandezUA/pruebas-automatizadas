
class ActionAdminObject {
    constructor(driver) {
        this.driver = driver;
    }

    async clickSettings() {
        let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]/a')
        return await element.click();
    }
    async clickSettingsIcon() {
        let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[2]/a');
        return await element.click();
    }

    async clickStaff() {
        let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[1]/div/div/nav/ul[1]/li[9]/a')
        return await element.click();
    }
    async clickInvite() {
        let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[9]/div[2]/div[2]/button')
    return await element.click();
    }
    async EnterEmail() {
        let email = "nuevo@miembro.com"
        let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[1]/div/input');   
        return await element.setValue(email);
    }
    async SelectAdminOption() {
        let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div/div/label[4]/input')
        return await element.click();
    }
    async ClickSendInvitation() {
        let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[2]/div[2]/div/button')
        return await element.click();
    }

    async backMenu() {
        let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[2]')
        return await element.click();
    }

    async ClickInvited() {
        let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[9]/section/div[1]/div[5]/button')
        return await element.click();
    }

    async DeleteInvited() {
        let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[9]/section/div[6]/div/section/div/div/div[2]/div/button[1]')
        return await element.click();
    }


}

module.exports = ActionAdminObject;