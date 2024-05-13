import ActionMemberObject from "../support/ActionMemberObject";

class EditMemberObject extends ActionMemberObject {
    

    enterNameEdit() {
        let name = 'Miembro creado editado para test!'
        cy.get("input#member-name").clear()
        cy.get("input#member-name")
            .should('be.visible')
            .type(name);
    }
    enterEmailEdit() {
        let email = 'editadotest@test.com'
        cy.get("input#member-email").clear()
        cy.get("input#member-email")
            .should('be.visible')
            .type(email);
    }
    enterNoteEdit() {
        let note = 'Esto es una nota de prueba la cual fue editada'
        cy.get("textarea#member-note").clear()
        cy.get("textarea#member-note")
            .should('be.visible')
            .type(note);
    }


}

export default new EditMemberObject()
