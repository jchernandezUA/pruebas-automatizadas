const LoginPageObject = require("../support/LoginPageObject");
const DeleteMemberObject = require("../support/DeleteMemberObject");
const EditMemberObject = require("../support/EditMemberObject");

describe("ghost edit member", function () {
    it("edit member", function () {
        cy.on("uncaught:exception", (err) => {
            if (err.message.includes("The play() request was interrupted")) {
                return false;
            }
        });
        //Given 
        LoginPageObject.signIn()
        EditMemberObject.clickOnNewMember()
        EditMemberObject.clickOnMemberOptions()
        EditMemberObject.enterName()
        EditMemberObject.enterEmail()
        EditMemberObject.enterNote()
        EditMemberObject.clickSave()
        EditMemberObject.back()
        //When 
        DeleteMemberObject.clickInSettingsOfMember()
        EditMemberObject.enterNameEdit()
        EditMemberObject.enterEmailEdit()
        EditMemberObject.enterNoteEdit()
        EditMemberObject.clickSave()
        EditMemberObject.back()
        //Then
        //validación
        cy.get('tr[data-test-list="members-list-item"]')
            .should('be.visible');
        cy.get('tr[data-test-list="members-list-item"]')
            .find('a').first()
            .find('h3')
            .should('have.text', 'Miembro creado editado para test!');
        //Then
        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
    });
});