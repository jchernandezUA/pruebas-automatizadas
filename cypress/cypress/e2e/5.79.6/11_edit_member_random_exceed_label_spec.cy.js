const LoginPageObject = require("../../support/LoginPageObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");
const EditMemberObject = require("../../support/EditMemberObject");

describe("ghost edit member, LABEL with  251 characters, use random date", function () {
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
        EditMemberObject.clickSave()
        EditMemberObject.back()
        cy.screenshot("ss_edit_member_01")
        //When 
        DeleteMemberObject.clickInSettingsOfMember()
        EditMemberObject.enterNameEdit(member.name)
        EditMemberObject.enterEmailEdit(member.email)
        EditMemberObject.enterLabel(member.label_251)
        cy.screenshot("ss_edit_member_02")
        EditMemberObject.clickSave()
        //Then
        //validación
        cy.get('.response')
        .should('be.visible')
        .contains('Validation failed for name.')
        //Then
        EditMemberObject.back()
        EditMemberObject.acceptNoChange()

        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
    });
});