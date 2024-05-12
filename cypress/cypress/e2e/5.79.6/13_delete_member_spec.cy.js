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
        DeleteMemberObject.clickOnNewMember()
        DeleteMemberObject.clickOnMemberOptions()
        DeleteMemberObject.enterName()
        DeleteMemberObject.enterEmail()
        DeleteMemberObject.enterNote()
        DeleteMemberObject.clickSave()
        DeleteMemberObject.back()
        //When 
        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()

        //Then
        //validación
        cy.get('button[data-test-button="add-yourself"]')
        .should('be.visible')
        .and('contain.text', 'Add yourself as a member to test');

    });
});