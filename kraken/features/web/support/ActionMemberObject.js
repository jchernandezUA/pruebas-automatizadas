class ActionMemberObject {
    constructor(driver) {
        this.driver = driver;
    }

    async clickOnMembers() {
        const element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]/a');
        return element.click();
    }

    async clickOnNewMember() {
        const element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/div[2]/a');
        return element.click();
    }

    async clickOnMemberOptions() {
        const element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]');
        return element.click();
    }

    async enterName() {
        let name = 'Miembro para creado test'
        const element = await this.driver.$('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[1]/input');
        return element.setValue(name);
    }

    async enterEmail() {
        let email = 'test@test.com'
        const element = await this.driver.$('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/input');
        return element.setValue(email);
    }

    async enterNote() {
        let note = 'Esto es una nota de prueba!'
        const element = await this.driver.$('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[3]/textarea');
        return element.setValue(note);
    }

    async clickSave() {
        const element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/header/section/button');
        return element.click();
    }

    async waitFor() {
        return new Promise(resolve => setTimeout(resolve, 5000));
    }

}

module.exports = ActionMemberObject;
