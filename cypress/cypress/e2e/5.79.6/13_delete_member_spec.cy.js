const LoginPageObject = require("../../support/LoginPageObject");
const CreateMemberObject = require("../../support/CreateMemberObject");
describe("ghost edit member", function () {

    it("Edit member", function () {
        cy.on("uncaught:exception", (err) => {
            if (err.message.includes("The play() request was interrupted")) {
                return false;
            }
        });
        //Given 
        LoginPageObject.signIn()
        CreateMemberObject.createMember()
        //When 
        cy.get('tr[data-test-list="members-list-item"]').should('be.visible')
            .then(() => {
                cy.contains('h3', 'miembro test para editar')
                    .parents('a')
                    .click();
            });

        cy.wait(2000);
        cy.get('section.view-actions button').first()
            .should('be.visible')
            .click();

        cy.get('ul.dropdown.gh-member-actions-menu').should('be.visible');
        cy.wait(2000);

        cy.contains('button', 'Delete member').click();
        cy.wait(2000);

        cy.get('button[data-test-button="confirm"]').contains('Delete member')
            .should('be.visible').click();

        //Then
        cy.get('tr[data-test-list="members-list-item"]')
            .find('a').first()
            .find('h3')
            .should('not.have.text', 'miembro test ya editado');


    });
});