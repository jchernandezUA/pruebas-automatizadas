const LoginPageObject = require("../support/LoginPageObject");
const DeleteMemberObject = require("../support/DeleteMemberObject");
describe("ghost Delete member", function () {

    it("Delete member", function () {
        cy.on("uncaught:exception", (err) => {
            if (err.message.includes("The play() request was interrupted")) {
                return false;
            }
        });
        //Given 
        LoginPageObject.signIn()
        cy.screenshot("ss_delete_member_01")
        DeleteMemberObject.clickOnNewMember()
        DeleteMemberObject.clickOnMemberOptions()
        DeleteMemberObject.enterName()
        DeleteMemberObject.enterEmail()
        DeleteMemberObject.enterNote()
        DeleteMemberObject.clickSave()
        DeleteMemberObject.back()
        cy.screenshot("ss_delete_member_02")
        //When 
        DeleteMemberObject.clickInSettingsOfMember()
        cy.screenshot("ss_delete_member_03")
        DeleteMemberObject.clickDeleteMember()
        cy.screenshot("ss_delete_member_04")
        DeleteMemberObject.acceptDelete()
        cy.screenshot("ss_delete_member_05")

        //Then
        //validación
        cy.get('button[data-test-button="add-yourself"]')
            .should('be.visible')
            .and('contain.text', 'Add yourself as a member to test');
        cy.screenshot("ss_delete_member_06")

    });
});