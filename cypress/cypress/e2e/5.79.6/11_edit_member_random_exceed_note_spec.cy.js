const LoginPageObject = require("../../support/LoginPageObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");
const EditMemberObject = require("../../support/EditMemberObject");

describe("ghost edit member,  NOTE with  501 characters, use random date", function () {
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
        EditMemberObject.enterEmailEdit(member.email)
        cy.screenshot("ss_edit_member_05")
        EditMemberObject.enterNoteEdit(member.note_501)
        cy.screenshot("ss_edit_member_06")
        EditMemberObject.clickSave()
        //Then
        //validación
        cy.get("textarea#member-note").scrollIntoView()
        cy.get('.response')            
        .should('be.visible')
        .contains('Note is too long.')
        cy.screenshot("ss_edit_member_07")
        //Then
        EditMemberObject.back()
        EditMemberObject.acceptNoChange()

        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
    });
});