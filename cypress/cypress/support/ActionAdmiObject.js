class ActionAdmiObject {


    clickSettings() {
        cy.get('a[data-test-nav="settings"]')
            .should('be.visible')
            .and('have.attr', 'href', '#/settings/')
            .click();
    }

    clickStaff() {
        cy.get('li[data-setting-nav-item="true"] a#staff')
            .should('be.visible')
            .click();
    }
    clickInvite() {
        cy.get('div[data-testid="users"]').within(() => {
            cy.get('button')
                .contains('Invite people')
                .should('be.visible').click();
        });
    }
    enterEmail() {
        cy.get('input[placeholder="jamie@example.com"]')
            .type('invitado-test@test.com')
            .should('have.value', 'invitado-test@test.com');
    }
    selectAdmin() {
        cy.get('input#administrator')
            .should('be.visible')
            .check({ force: true });
    }
    sendInvitation() {
        cy.get('section[data-testid="invite-user-modal"]')
            .should('be.visible');
        cy.contains('button', 'Send invitation now')
            .click();
    }
    back() {
        cy.get('#modal-backdrop')
            .click('topRight');
        cy.reload();
        cy.wait(5000);
    }

    clickInvited() {
        cy.get('button#invited')
            .should('be.visible')
            .click();
    }


}

module.exports = ActionAdmiObject;