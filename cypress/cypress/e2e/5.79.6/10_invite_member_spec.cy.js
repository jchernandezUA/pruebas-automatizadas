const LoginPageObject = require("../support/LoginPageObject");
const ActionMemberObject = require("../support/ActionMemberObject");
const DeleteMemberObject = require("../support/DeleteMemberObject");

describe("ghost invite member", function () {
    let actionMemberObject = new ActionMemberObject;
    it("Invite member", function () {
        cy.on("uncaught:exception", (err) => {
            if (err.message.includes("The play() request was interrupted")) {
                return false;
            }
        });
        //Given 
        LoginPageObject.signIn()
        cy.screenshot("ss_invite_member_01")
        actionMemberObject.clickOnNewMember()
        cy.screenshot("ss_invite_member_02")
        //When 
        actionMemberObject.clickOnMemberOptions()
        cy.screenshot("ss_invite_member_03")
        actionMemberObject.enterName()
        cy.screenshot("ss_invite_member_04")
        actionMemberObject.enterEmail()
        cy.screenshot("ss_invite_member_05")
        actionMemberObject.enterNote()
        cy.screenshot("ss_invite_member_06")
        actionMemberObject.clickSave()
        cy.screenshot("ss_invite_member_07")
        actionMemberObject.back()
        //Then
        //validación
        cy.get('tr[data-test-list="members-list-item"]')
            .should('be.visible');
        cy.get('tr[data-test-list="members-list-item"]')
            .find('a').first()
            .find('h3')
            .should('have.text', 'miembro test para editar');
        cy.screenshot("ss_invite_member_08")

        //Then
        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
    });
});