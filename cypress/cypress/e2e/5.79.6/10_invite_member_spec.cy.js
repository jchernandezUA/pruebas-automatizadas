const LoginPageObject = require("../../support/LoginPageObject");
describe("ghost invitar miembro", function () {

    it("Log in", function () {
        cy.on("uncaught:exception", (err) => {
            if (err.message.includes("The play() request was interrupted")) {
                return false;
            }
        });
        //Given 
        LoginPageObject.signIn()
        cy.wait(2000);
        cy.get("a#ember30").click();
        cy.wait(2000);
        //When 
        cy.get("a#ember30").click();
        cy.wait(2000);
        cy.get("a#ember52").click();
        cy.wait(2000);
        cy.get("input#member-name").type("miembro test");
        cy.get("input#member-email").type("miembro2@test.com");
        cy.get("textarea#member-note").type("Esto es un texto de prueba");
        cy.get("button#ember73").click();
        cy.wait(2000);
        cy.go('back');
        cy.wait(2000);

        //Then
        cy.get('tr[data-test-list="members-list-item"]').should('be.visible');    
        cy.get('tr[data-test-list="members-list-item"]')
        .find('a').first() 
        .find('h3') 
        .should('have.text', 'miembro test'); 

    });
});