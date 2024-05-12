class ActionAdmiObject {

    clickSettings() {
        cy.contains('a.ember-view', 'Staff')
        .should('be.visible')
        .click();
    }

    clickStaff() {
        cy.contains('a.ember-view', 'Staff')
        .should('be.visible')
        .click();
    }
    clickInvite() {
        cy.contains('button.gh-btn.gh-btn-green', 'Invite people')
        .should('be.visible')
        .click();

    }
    enterEmail() {
         cy.get('section.modal-content')
         .should('be.visible');
         cy.get('input#new-user-email')
         .first()
         .type('invitado-test@test.com');
    }
    selectAdmin() {
        cy.get('select#new-user-role')
        .should('be.visible')
        .select('Administrator');
    }

    sendInvitation() {
        cy.contains('button.gh-btn.gh-btn-green', 'Send invitation now')
        .should('be.visible')
        .click();

    }
    back() {
        cy.reload();
        cy.wait(2000);
    }

    clickInvited() {
        cy.contains('a.ember-view', 'Staff')
        .should('be.visible')
        .click();
    }
    deleteAdmin() {
        cy.contains('.apps-grid-cell', 'invitado-test@test.com')
            .find('a.apps-configured-action.red-hover')
            .click();
    }
}

module.exports = ActionAdmiObject;