const ActionMemberObject = require('./ActionMemberObject');

class FilterMemberObject extends ActionMemberObject {

    async enterFilter() {
        let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/div[2]/div[1]')
        return await element.click();

    }
    async clickNameFilter() {
        let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]')
        return await element.click();
    }

    async clickLabelFilter() {
        let element = await this.driver.$('/html/body/div[1]/div/div/section/div[1]/div/div/span[2]/select')
        return await element.click();
    }

    async clickContainFilter() {
        let element = await this.driver.$('/html/body/div[1]/div/div/section/div[1]/div/div/span[2]/select/option[2]')
        return await element.click();
    }
    async enterFilterText() {
        let note = 'juanto perez'
        let element = await this.driver.$('/html/body/div[1]/div/div/section/div[1]/div/div/input');
        return await element.setValue(note);
    }

    async clickAplicateFilter() {
        let element = await this.driver.$('/html/body/div[1]/div/div/div/button[2]')
        return await element.click();
    }
    async clickCleanFilter() {
        let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/a')
        return await element.click();
    }

}

module.exports = FilterMemberObject;
