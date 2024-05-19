const LoginPageObject = require("../../support/LoginPageObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");
const EditMemberObject = require("../../support/EditMemberObject");

describe("ghost edit member, EMAIL with  251 characters, use random date", function () {
    let member;
    //Given 
    beforeEach(() => {
        cy.generateFakerData().then((generatedData) => {
            member = generatedData;
        });
    });
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
        EditMemberObject.enterName(member.name)
        EditMemberObject.enterEmail(member.email)
        EditMemberObject.enterNote(member.note)
        EditMemberObject.clickSave()
        EditMemberObject.back()
        cy.screenshot("ss_edit_member_02")
        //When 
        DeleteMemberObject.clickInSettingsOfMember()
        cy.screenshot("ss_edit_member_03")
        EditMemberObject.enterNameEdit(member.name)
        cy.screenshot("ss_edit_member_04")
        EditMemberObject.enterEmailEdit(member.email_251)
        cy.screenshot("ss_edit_member_05")
        EditMemberObject.enterNoteEdit(member.note)
        cy.screenshot("ss_edit_member_06")
        EditMemberObject.clickSave()
        cy.screenshot("ss_edit_member_07")
        //Then
        //validación
        cy.get('.response')
        .should('be.visible')
        .contains('Email cannot be longer than 191 characters.')
        cy.screenshot("ss_invite_member_08")
        //Then
        EditMemberObject.back()
        EditMemberObject.acceptNoChange()

        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
    });
});