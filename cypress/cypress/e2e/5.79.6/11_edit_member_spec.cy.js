const LoginPageObject = require("../../support/LoginPageObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");
const EditMemberObject = require("../../support/EditMemberObject");

describe("ghost edit member", function () {
    it("edit member", function () {
        cy.on("uncaught:exception", (err) => {
            if (err.message.includes("The play() request was interrupted")) {
                return false;
            }
        });
        //Given 
        LoginPageObject.signIn()
        cy.screenshot("ss_edit_member_01")
        EditMemberObject.clickOnNewMember()
        EditMemberObject.clickOnMemberOptions()
        EditMemberObject.enterName()
        EditMemberObject.enterEmail()
        EditMemberObject.enterNote()
        EditMemberObject.clickSave()
        EditMemberObject.back()
        cy.screenshot("ss_edit_member_02")
        //When 
        DeleteMemberObject.clickInSettingsOfMember()
        cy.screenshot("ss_edit_member_03")
        EditMemberObject.enterNameEdit()
        cy.screenshot("ss_edit_member_04")
        EditMemberObject.enterEmailEdit()
        cy.screenshot("ss_edit_member_05")
        EditMemberObject.enterNoteEdit()
        cy.screenshot("ss_edit_member_06")
        EditMemberObject.clickSave()
        cy.screenshot("ss_edit_member_07")
        EditMemberObject.back()
        //Then
        //validación
        cy.get('tr[data-test-list="members-list-item"]')
            .should('be.visible');
        cy.get('tr[data-test-list="members-list-item"]')
            .find('a').first()
            .find('h3')
            .should('have.text', 'Miembro creado editado para test!');
        cy.screenshot("ss_edit_member_08")
    
        //Then
        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
    });
});