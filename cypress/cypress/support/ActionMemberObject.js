class ActionMemberObject {

    clickOnNewMember() {
        cy.get('a[data-test-nav="members"]')
            .should('be.visible')
            .click();

    }
    clickOnMemberOptions() {
        cy.wait(1000);
        cy.get('a[data-test-new-member-button="true"]')
            .should('be.visible')
            .click();
    }
    enterName(name) {
        cy.get("input#member-name")
            .should('be.visible')
            .type(name);
    }
    enterEmail(email) {
        cy.get("input#member-email")
            .should('be.visible')
            .type(email);
    }
    enterLabel(label) {

        cy.get('.ember-basic-dropdown').within(() => {
            cy.get('input.ember-power-select-trigger-multiple-input')
                .should('be.visible')
                .type(label);
        })
        cy.get('.ember-basic-dropdown-content', { timeout: 10000 })
        .should('be.visible');
        cy.get('.ember-power-select-options').first()
            .click();
    }
    enterNote(note) {
        cy.get("textarea#member-note")
            .should('be.visible')
            .type(note);
    }
    clickSave() {
        cy.contains('button', 'Save')
            .click();
    }
    back() {
        cy.wait(1000);
        cy.go('back');
    }

    acceptNoChange() {
        cy.get('button[data-test-leave-button]')
            .should('be.visible')
            .click();

    }

}

module.exports = ActionMemberObject;