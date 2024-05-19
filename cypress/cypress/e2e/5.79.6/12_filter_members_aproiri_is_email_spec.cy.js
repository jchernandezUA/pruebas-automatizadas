const LoginPageObject = require("../../support/LoginPageObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");
const FilterMemberObject = require("../../support/FilterMemberObject");

describe("ghost filter member , use a-priori data ,Validate IS in email", function () {
    //then
    beforeEach(() => {
        cy.fixture('dataApriori.json').as('testData');
    });

    it("filter member", function () {;
        //Given 
        LoginPageObject.signIn()
        cy.screenshot("ss_filter_member_01")
        FilterMemberObject.clickOnNewMember()
        FilterMemberObject.clickOnMemberOptions()
        FilterMemberObject.enterName(this.testData[0].name)
        FilterMemberObject.enterEmail(this.testData[0].email)
        FilterMemberObject.enterNote(this.testData[0].note)
        FilterMemberObject.clickSave()
        FilterMemberObject.back()
        cy.screenshot("ss_filter_member_02")
        //When 
        FilterMemberObject.enterFilter()
        FilterMemberObject.clickEmailFilter()
        cy.screenshot("ss_filter_member_03")
        FilterMemberObject.clickIsFilter()
        cy.screenshot("ss_filter_member_04")
        FilterMemberObject.enterFilterText(this.testData[0].email)
        cy.screenshot("ss_filter_member_05")
        FilterMemberObject.clickAplicateFilter()
        cy.screenshot("ss_filter_member_06")
        //Then
        //validación
        cy.get('tr[data-test-list="members-list-item"]')
            .should('be.visible');
        cy.get('tr[data-test-list="members-list-item"]')
            .find('a').first()
            .find('h3')
            .should('have.text', this.testData[0].name);
        cy.screenshot("ss_filter_member_07")
        //Then
        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
        FilterMemberObject.clickShowAllMembers();
    });
});