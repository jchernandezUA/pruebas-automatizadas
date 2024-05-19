import ActionMemberObject from "../support/ActionMemberObject";

class EditMemberObject extends ActionMemberObject {
    

    enterNameEdit(name) {
        cy.get("input#member-name").clear()
        cy.get("input#member-name")
        .should('be.visible')
        .type(name);
    }
    enterEmailEdit(email) {
        cy.get("input#member-email").clear()
        cy.get("input#member-email")
            .should('be.visible')
            .type(email);
    }
    enterNoteEdit(note) {
        cy.get("textarea#member-note").clear()
        cy.get("textarea#member-note")
            .should('be.visible')
            .type(note);
    }


}

export default new EditMemberObject()
