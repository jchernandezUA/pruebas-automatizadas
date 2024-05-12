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
        cy.screenshot("ss_filter_member_01")
        FilterMemberObject.clickOnNewMember()
        FilterMemberObject.clickOnMemberOptions()
        FilterMemberObject.enterName()
        FilterMemberObject.enterEmail()
        FilterMemberObject.enterNote()
        FilterMemberObject.clickSave()
        FilterMemberObject.back()
        cy.screenshot("ss_filter_member_02")
        //When 
        FilterMemberObject.enterFilter()
        cy.screenshot("ss_filter_member_03")
        FilterMemberObject.clickContainFilter()
        cy.screenshot("ss_filter_member_04")
        FilterMemberObject.enterFilterText()
        cy.screenshot("ss_filter_member_05")
        FilterMemberObject.clickAplicateFilter()
        cy.screenshot("ss_filter_member_06")
        //Then
        //validación
        cy.get('div.gh-members-empty').within(() => {
            cy.get('a[data-test-button="show-all-members"]')
            .should('exist')
            .and('be.visible')
            .and('contain.text', 'Show all members')
            .click()
          });
        cy.screenshot("ss_filter_member_07")
        //Then
        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
    });
});