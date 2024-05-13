import ActionMemberObject from "../support/ActionMemberObject";

class FilterMemberObject extends ActionMemberObject {

    enterFilter() {
        cy.wait(1000);
        cy.get('div[data-test-button="members-filter-actions"]')
            .should('be.visible')
            .click();
    }
    clickNameFilter() {
        cy.get('select[data-test-select="members-filter"]')
        .should('have.value', 'Name');
    }

    clickContainFilter() {
        cy.get('select[data-test-select="members-filter-operator"]')
        .should('be.visible')
        .select('contains')
        .should('have.value', 'contains');

    }
    enterFilterText() {
        cy.get('input[data-test-input="members-filter-value"]')
        .should('be.visible')
        .type('juanito perez')

    }
    clickAplicateFilter() {
        cy.contains('button', 'Apply filters')
        .should('be.visible')
        .click();
    }

}

export default new FilterMemberObject()

