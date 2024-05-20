const LoginPageObject = require("../../support/LoginPageObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");
describe("ghost Delete member, data random", function () {

    let member;
    //then
    beforeEach(() => {
        cy.generateFakerData().then((generatedData) => {
            member = generatedData;
        });
    });

    it("Delete member", function () {
        //Given 
        LoginPageObject.signIn()
        DeleteMemberObject.clickOnNewMember()
        DeleteMemberObject.clickOnMemberOptions()
        DeleteMemberObject.enterName(member.name)
        DeleteMemberObject.enterEmail(member.email)
        DeleteMemberObject.enterNote(member.note)
        cy.screenshot("ss_delete_member_01")
        DeleteMemberObject.clickSave()
        DeleteMemberObject.back()
        //When 
        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
        cy.screenshot("ss_delete_member_02")

        //Then
        //validación
        cy.get('button[data-test-button="add-yourself"]')
            .should('be.visible')
            .and('contain.text', 'Add yourself as a member to test');
        cy.screenshot("ss_delete_member_03")

    });
});