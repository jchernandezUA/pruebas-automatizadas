const LoginPageObject = require("../../support/LoginPageObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");
const FilterMemberObject = require("../../support/FilterMemberObject");

describe("ghost filter member , use a-priori data ,Validate IS in name", function () {
    let member;
    //then
    beforeEach(() => {
        cy.generateFakerData().then((generatedData) => {
            member = generatedData;
        });
    });

    it("filter member", function () {
        //Given 
        LoginPageObject.signIn()
        FilterMemberObject.clickOnNewMember()
        FilterMemberObject.clickOnMemberOptions()
        FilterMemberObject.enterName(member.name)
        FilterMemberObject.enterEmail(member.email)
        FilterMemberObject.enterNote(member.note)
        FilterMemberObject.clickSave()
        FilterMemberObject.back()
        //When 
        FilterMemberObject.enterFilter()
        FilterMemberObject.clickIsFilter()
        FilterMemberObject.enterFilterText(member.name)
        cy.screenshot("ss_filter_member_01")
        FilterMemberObject.clickAplicateFilter()
        //Then
        //validación
        cy.get('tr[data-test-list="members-list-item"]')
            .should('be.visible');
        cy.get('tr[data-test-list="members-list-item"]')
            .find('a').first()
            .find('h3')
            .should('have.text', member.name);
        cy.screenshot("ss_filter_member_02")
        //Then
        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
        FilterMemberObject.clickShowAllMembers();
    });
});