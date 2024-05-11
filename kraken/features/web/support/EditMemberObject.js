const ActionMemberObject = require('./ActionMemberObject');

class EditMemberObject extends ActionMemberObject {

    async enterNameEdit() {
        let name = 'Miembro creado y edita para test'
        const element = await this.driver.$('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[1]/input');
        return element.setValue(name);
    }

    async enterEmailEdit() {
        let email = 'editadotest@test.com'
        const element = await this.driver.$('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/input');
        return element.setValue(email);
    }

    async enterNoteEdit() {
        let note = 'Esto es una nota de prueba la cual fue editada'
        const element = await this.driver.$('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[3]/textarea');
        return element.setValue(note);    }


}

module.exports = EditMemberObject;
