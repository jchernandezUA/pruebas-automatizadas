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
        EditMemberObject.clickOnMemberOptions()
        EditMemberObject.enterName(this.testData[2].name)
        EditMemberObject.enterEmail(this.testData[2].email)
        EditMemberObject.enterNote(this.testData[2].note)
        EditMemberObject.clickSave()
        EditMemberObject.back()
        cy.screenshot("ss_edit_member_01")
        //When 
        DeleteMemberObject.clickInSettingsOfMember()
        EditMemberObject.enterNameEdit(this.testData[1].name)
        EditMemberObject.enterEmailEdit(this.testData[1].email)
        EditMemberObject.enterNoteEdit(this.testData[1].note)
        EditMemberObject.clickSave()
        EditMemberObject.back()
        //Then
        //validación 
        cy.get('tr[data-test-list="members-list-item"]')
            .should('be.visible');
        cy.get('tr[data-test-list="members-list-item"]')
            .find('a').first()
            .find('h3')
            .should('have.text', this.testData[1].name);
        cy.screenshot("ss_edit_member_02")
        //Then
        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
    });
});