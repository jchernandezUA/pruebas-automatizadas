const LoginPageObject = require("../support/LoginPageObject");
const ActionMemberObject = require("../support/ActionMemberObject");
const DeleteMemberObject = require("../support/DeleteMemberObject");

describe("ghost invite member", function () {
    let actionMemberObject = new ActionMemberObject;
    it("Invite member", function () {
        cy.on("uncaught:exception", (err) => {
            if (err.message.includes("The play() request was interrupted")) {
                return false;
            }
        });
        //Given 
        LoginPageObject.signIn()
        actionMemberObject.clickOnNewMember()
        //When 
        actionMemberObject.clickOnMemberOptions()
        actionMemberObject.enterName()
        actionMemberObject.enterEmail()
        actionMemberObject.enterNote()
        actionMemberObject.clickSave()
        actionMemberObject.back()
        //Then
        //validación
        cy.get('tr[data-test-list="members-list-item"]')
            .should('be.visible');
        cy.get('tr[data-test-list="members-list-item"]')
            .find('a').first()
            .find('h3')
            .should('have.text', 'miembro test para editar');
        //Then
        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
    });
});