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
        //Given 
        LoginPageObject.signIn()
        EditMemberObject.clickOnNewMember()
        EditMemberObject.clickOnMemberOptions()
        EditMemberObject.enterName(member.name)
        EditMemberObject.enterEmail(member.email)
        EditMemberObject.enterNote(member.note)
        cy.screenshot("ss_edit_member_01")
        EditMemberObject.clickSave()
        EditMemberObject.back()
        //When 
        DeleteMemberObject.clickInSettingsOfMember()
        EditMemberObject.enterNameEdit(member.name)
        EditMemberObject.enterEmailEdit(member.email)
        EditMemberObject.enterNoteEdit(member.note_501)
        cy.screenshot("ss_edit_member_02")
        EditMemberObject.clickSave()
        //Then
        //validación
        cy.get("textarea#member-note").scrollIntoView()
        cy.get('.response')            
        .should('be.visible')
        .contains('Note is too long.')
        cy.screenshot("ss_edit_member_03")
        //Then
        EditMemberObject.back()
        EditMemberObject.acceptNoChange()

        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
    });
});