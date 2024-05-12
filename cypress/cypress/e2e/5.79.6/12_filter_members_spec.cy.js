const LoginPageObject = require("../support/LoginPageObject");
const DeleteMemberObject = require("../support/DeleteMemberObject");
const FilterMemberObject = require("../support/FilterMemberObject");

describe("ghost filter member", function () {
    it("filter member", function () {
        cy.on("uncaught:exception", (err) => {
            if (err.message.includes("The play() request was interrupted")) {
                return false;
            }
        });
        //Given 
        LoginPageObject.signIn()
        FilterMemberObject.clickOnNewMember()
        FilterMemberObject.clickOnMemberOptions()
        FilterMemberObject.enterName()
        FilterMemberObject.enterEmail()
        FilterMemberObject.enterNote()
        FilterMemberObject.clickSave()
        FilterMemberObject.back()
        //When 
        FilterMemberObject.enterFilter()
        FilterMemberObject.clickContainFilter()
        FilterMemberObject.enterFilterText()
        FilterMemberObject.clickAplicateFilter()
        //Then
        //validación
        cy.get('div.gh-members-empty').within(() => {
            cy.get('a[data-test-button="show-all-members"]')
            .should('exist')
            .and('be.visible')
            .and('contain.text', 'Show all members')
            .click()
          });
        //Then
        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
    });
});