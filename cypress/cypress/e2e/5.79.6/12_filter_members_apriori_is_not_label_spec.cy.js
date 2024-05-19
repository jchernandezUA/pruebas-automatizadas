const LoginPageObject = require("../../support/LoginPageObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");
const FilterMemberObject = require("../../support/FilterMemberObject");

describe("ghost filter member , use a-priori data ,Validate IS NOT in label", function () {
    //then
    beforeEach(() => {
        cy.fixture('dataApriori.json').as('testData');
    });

    it("filter member", function () {
        //Given 
        LoginPageObject.signIn()
        FilterMemberObject.clickOnNewMember()
        FilterMemberObject.clickOnMemberOptions()
        FilterMemberObject.enterName(this.testData[0].name)
        FilterMemberObject.enterEmail(this.testData[0].email)
        FilterMemberObject.enterLabel(this.testData[0].label)
        FilterMemberObject.enterNote(this.testData[0].note)
        FilterMemberObject.clickSave()
        FilterMemberObject.back()
        //When 
        FilterMemberObject.enterFilter()
        FilterMemberObject.clickLabelFilter()
        FilterMemberObject.clickIsNotFilter()
        FilterMemberObject.ClickFilterLabel()
        cy.screenshot("ss_filter_member_01")
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
        cy.screenshot("ss_filter_member_02")
        //Then
        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
    });
});