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
    enterName() {
        cy.get("input#member-name")
            .should('be.visible')
            .type("miembro test para editar");
    }
    enterEmail() {
        cy.get("input#member-email")
            .should('be.visible')
            .type("miembro@test.com");
    }
    enterNote() {
        cy.get("textarea#member-note")
            .should('be.visible')
            .type("Esto es un texto de prueba");
    }
    clickSave() {
        cy.contains('button', 'Save')
            .click();
    }
    back() {
        cy.wait(1000);
        cy.go('back');
    }

}

module.exports = ActionMemberObject;