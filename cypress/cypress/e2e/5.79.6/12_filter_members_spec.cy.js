const LoginPageObject = require("../../support/LoginPageObject");
describe("ghost filter member", function () {

    it("Filter member", function () {
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
        cy.contains('div', 'Filter').click();
        cy.get('div.gh-filter-inputgroup') 
        .find('select').eq(1) 
        .select('contains'); 
        cy.get('div.gh-filter-inputgroup') 
        .find('input.gh-input') 
        .type('test'); 
        cy.contains('button', 'Apply filters').click();
        //Then
        cy.get('tr[data-test-list="members-list-item"]').should('be.visible')


    });
});