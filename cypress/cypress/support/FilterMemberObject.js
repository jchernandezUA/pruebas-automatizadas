import ActionMemberObject from "../support/ActionMemberObject";

class FilterMemberObject extends ActionMemberObject {

    enterFilter() {
        cy.wait(1000);
        cy.get('div[data-test-button="members-filter-actions"]')
            .should('be.visible')
            .click();
    }
    clickEmailFilter() {
        cy.get('select[data-test-select="members-filter"]')
            .should('be.visible')
            .select('Email')
    }
    clickLabelFilter() {
        cy.get('select[data-test-select="members-filter"]')
            .should('be.visible')
            .select('Label')
    }
    clickContainFilter() {
        cy.get('select[data-test-select="members-filter-operator"]')
            .should('be.visible')
            .select('contains')
            .should('have.value', 'contains');
    }
    clickIsFilter() {
        cy.get('select[data-test-select="members-filter-operator"]')
            .should('be.visible')
            .select('is')
            .should('have.value', 'is');
    }
    clickStartsWithFilter() {
        cy.get('select[data-test-select="members-filter-operator"]')
            .should('be.visible')
            .select('starts with')
    }
    clickEndsWithFilter() {
        cy.get('select[data-test-select="members-filter-operator"]')
            .should('be.visible')
            .select('ends with')
    }
    clickIsNotFilter() {
        cy.get('select[data-test-select="members-filter-operator"]')
            .should('be.visible')
            .select('is not')
    }
    ClickFilterLabel() {
        cy.get('section.gh-filters .gh-filter-block .gh-filter-inputgroup .ember-basic-dropdown .ember-basic-dropdown-trigger.gh-token-input .ember-power-select-trigger-multiple-input[type="search"]')
            .click();
        cy.get('.ember-power-select-option')
            .should('be.visible')
            .first()
            .click();
    }
    enterFilterText(text) {
        cy.get('input[data-test-input="members-filter-value"]')
            .should('be.visible')
            .type(text)
    }
    clickAplicateFilter() {
        cy.wait(1000)
        cy.contains('button', 'Apply filters')
            .should('be.visible')
            .click();
    }
    clickShowAllMembers() {
        cy.get('div.gh-members-empty').within(() => {
            cy.get('a[data-test-button="show-all-members"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text', 'Show all members')
                .click()
        });
    }

}

export default new FilterMemberObject()

