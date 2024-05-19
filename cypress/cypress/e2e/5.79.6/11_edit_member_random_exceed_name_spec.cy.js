const LoginPageObject = require("../../support/LoginPageObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");
const EditMemberObject = require("../../support/EditMemberObject");

describe("ghost edit member, NAME with  251 characters, use random date", function () {
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
        EditMemberObject.enterNameEdit(member.name_251)
        cy.screenshot("ss_edit_member_02")
        EditMemberObject.enterEmailEdit(member.email)
        EditMemberObject.enterNoteEdit(member.note)
        EditMemberObject.clickSave()
        EditMemberObject.back()
        EditMemberObject.acceptNoChange()
        cy.screenshot("ss_edit_member_03")
        //Then
        //validación
        //Then

        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
    });
});