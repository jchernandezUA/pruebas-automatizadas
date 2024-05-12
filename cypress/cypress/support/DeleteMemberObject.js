
import ActionMemberObject from "../support/ActionMemberObject";

class DeleteMemberObject extends ActionMemberObject {


    clickInSettingsOfMember() {
        cy.wait(1000);
        cy.get('tr[data-test-list="members-list-item"]')
        .should('be.visible')
        .first()
        .click()
    }
    clickDeleteMember() {
        cy.wait(1000);
        cy.get('section.view-actions button').first()
            .scrollIntoView()
            .should('be.visible')
            .click();
        cy.wait(1000);
        cy.contains('button', 'Delete member').click();
    }

    acceptDelete() {
        cy.wait(1000);
        cy.get('button[data-test-button="confirm"]').contains('Delete member')
            .should('be.visible').click();
    }
}

export default new DeleteMemberObject()


