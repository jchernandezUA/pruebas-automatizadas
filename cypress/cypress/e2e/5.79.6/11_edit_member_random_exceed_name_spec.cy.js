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
        EditMemberObject.enterNameEdit(member.name_251)
        cy.screenshot("ss_edit_member_04")
        EditMemberObject.enterEmailEdit(member.email)
        cy.screenshot("ss_edit_member_05")
        EditMemberObject.enterNoteEdit(member.note)
        cy.screenshot("ss_edit_member_06")
        EditMemberObject.clickSave()
        cy.screenshot("ss_edit_member_07")
        EditMemberObject.back()
        EditMemberObject.acceptNoChange()
        //Then
        //validación
        //Then

        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
    });
});