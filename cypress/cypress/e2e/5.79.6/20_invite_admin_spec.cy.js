const LoginPageObject = require("../support/LoginPageObject");
const ActionAdmiObject = require("../support/ActionAdmiObject");


describe("ghost invite admin", function () {
    let actionAdmiObject = new ActionAdmiObject;
    it("Invite admin", function () {
        cy.on("uncaught:exception", (err) => {
            if (err.message.includes("The play() request was interrupted")) {
                return false;
            }
        });
        //Given 
        LoginPageObject.signIn()
        //Then
        actionAdmiObject.clickSettings()
        actionAdmiObject.clickStaff()
        actionAdmiObject.clickInvite()
        actionAdmiObject.enterEmail()
        actionAdmiObject.selectAdmin()
        actionAdmiObject.sendInvitation()
        actionAdmiObject.back()
        actionAdmiObject.clickInvited()
        //Then
        //validación
        cy.get('[data-testid="user-tabview"]')
        .should('be.visible');
        cy.get('[data-testid="user-invite"]')
        .contains('invitado-test@test.com')
        .should('be.visible');
    });
});