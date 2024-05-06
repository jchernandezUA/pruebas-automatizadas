const LoginPageObject = require("../support/LoginPageObject");
const CreateMemberObject = require("../support/CreateMemberObject");
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
        cy.get('input#member-name').clear()
        cy.get("input#member-name").type("miembro test ya editado");
        cy.get('input#member-email').clear()
        cy.get("input#member-email").type("miembroeditado@test.com");
        cy.get('textarea#member-note').clear()
        cy.get("textarea#member-note").type("Esto es un texto de prueba ya editado");
        cy.contains('button', 'Save').click();
        cy.wait(2000);
        cy.go('back');
        cy.wait(2000);

        //Then
        cy.get('tr[data-test-list="members-list-item"]')
        .find('a').first() 
        .find('h3') 
        .should('have.text', 'miembro test ya editado'); 


    });
});