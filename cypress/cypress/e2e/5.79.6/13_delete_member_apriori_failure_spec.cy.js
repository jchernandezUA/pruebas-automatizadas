const LoginPageObject = require("../../support/LoginPageObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");
describe("ghost Delete member, use a-priori data", function () {
    //Given 
    beforeEach(() => {
        cy.fixture('dataApriori.json').as('testData');
    });

    it("Delete member", function () {
        //Given 
        LoginPageObject.signIn()
        DeleteMemberObject.clickOnNewMember()
            DeleteMemberObject.clickOnMemberOptions()
            DeleteMemberObject.enterName(this.testData[1].name)
            DeleteMemberObject.enterEmail(this.testData[1].email)
            DeleteMemberObject.enterNote(this.testData[1].note)
            cy.screenshot("ss_delete_member_01")
            DeleteMemberObject.clickSave()
            DeleteMemberObject.back()
        //When
        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.enterName(this.testData[2].name)
        cy.screenshot("ss_delete_member_02")
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
        cy.screenshot("ss_delete_member_03")

        //Then
        //validación
        cy.get('button[data-test-button="add-yourself"]')
            .should('be.visible')
            .and('contain.text', 'Add yourself as a member to test');
        cy.screenshot("ss_delete_member_04")

    });
});