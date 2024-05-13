const LoginPageObject = require("../../support/LoginPageObject");
const ActionAdmiObject = require("../../support/ActionAdmiObject");


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
        cy.screenshot("ss_invite_admin_01")
        //Then
        actionAdmiObject.clickSettings()
        cy.screenshot("ss_invite_admin_02")
        actionAdmiObject.clickStaff()
        cy.screenshot("ss_invite_admin_03")
        actionAdmiObject.clickInvite()
        cy.screenshot("ss_invite_admin_04")
        actionAdmiObject.enterEmail()
        cy.screenshot("ss_invite_admin_05")
        actionAdmiObject.selectAdmin()
        cy.screenshot("ss_invite_admin_06")
        actionAdmiObject.sendInvitation()
        cy.screenshot("ss_invite_admin_07")
        actionAdmiObject.back()
        cy.screenshot("ss_invite_admin_08")
        actionAdmiObject.clickInvited()
        cy.screenshot("ss_invite_admin_09")
        //Then
        //validación
        cy.get('[data-testid="user-tabview"]')
            .should('be.visible');
        cy.get('[data-testid="user-invite"]')
            .contains('invitado-test@test.com')
            .should('be.visible');
        cy.screenshot("ss_invite_admin_10")

    });
});