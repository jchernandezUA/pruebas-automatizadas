const LoginPageObject = require("../../support/LoginPageObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");
const EditMemberObject = require("../../support/EditMemberObject");

describe("ghost edit member, use a-priori data", function () {
    //Given 
    beforeEach(() => {
        cy.fixture('dataApriori.json').as('testData');
    });
    it("edit member", function () {

        //Given 
        LoginPageObject.signIn()
        EditMemberObject.clickOnNewMember()
        for(let i = 0;i <= 1; i++){
            EditMemberObject.clickOnMemberOptions()
            EditMemberObject.enterName(this.testData[i].name)
            EditMemberObject.enterEmail(this.testData[i].email)
            EditMemberObject.enterNote(this.testData[i].note)
            EditMemberObject.clickSave()
            EditMemberObject.back()
        }
        cy.screenshot("ss_edit_member_01")
        //When 
        DeleteMemberObject.clickInSettingsOfMember()
        EditMemberObject.enterNameEdit(this.testData[1].name)
        EditMemberObject.enterEmailEdit(this.testData[0].email)
        EditMemberObject.enterNoteEdit(this.testData[0].note)
        cy.screenshot("ss_edit_member_02")
        EditMemberObject.clickSave()
        //Then
        //validación 
        cy.get('.response')
        .should('be.visible')
        .contains('Member already exists. Attempting to edit member with existing email address')
        EditMemberObject.back()
        EditMemberObject.acceptNoChange()
        //Then
        for(let i = 0;i <= 1; i++){
            DeleteMemberObject.clickInSettingsOfMember()
            DeleteMemberObject.clickDeleteMember()
            DeleteMemberObject.acceptDelete()
        }
    });
});