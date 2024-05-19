const LoginPageObject = require("../../support/LoginPageObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");
const FilterMemberObject = require("../../support/FilterMemberObject");

describe("ghost filter member , use Pseudo data, Validate ENDS WITH with incomplete email", function () {
    //Given 
    beforeEach(() => {
        cy.fixture('dataApriori.json').as('testData');

        cy.request('https://my.api.mockaroo.com/api_ghost.json?key=4c651d10')
            .then((response) => {
                expect(response.status).to.eq(200);
                cy.wrap(response.body).as('testDataFilter');
            })
    });

    it("filter member", function () {
        cy.on("uncaught:exception", (err) => {
            if (err.message.includes("The play() request was interrupted")) {
                return false;
            }
        });
        //Given 
        LoginPageObject.signIn()
        // cy.screenshot("ss_filter_member_01")
        FilterMemberObject.clickOnNewMember()
        FilterMemberObject.clickOnMemberOptions()
        FilterMemberObject.enterName(this.testData[1].name)
        FilterMemberObject.enterEmail(this.testData[1].email)
        FilterMemberObject.enterNote(this.testData[1].note)
        FilterMemberObject.clickSave()
        FilterMemberObject.back()
        // cy.screenshot("ss_filter_member_02")
        //When 
        FilterMemberObject.enterFilter()
        FilterMemberObject.clickEmailFilter()
        // cy.screenshot("ss_filter_member_03")
        FilterMemberObject.clickEndsWithFilter()
        // cy.screenshot("ss_filter_member_04")
        FilterMemberObject.enterFilterText(this.testDataFilter.email)
        // cy.screenshot("ss_filter_member_05")
        FilterMemberObject.clickAplicateFilter()
        // cy.screenshot("ss_filter_member_06")
        //Then
        //validación
        cy.get('div.gh-members-empty').within(() => {
            cy.get('a[data-test-button="show-all-members"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text', 'Show all members')
                .click()
        });
        // cy.screenshot("ss_filter_member_07")
        //Then
        DeleteMemberObject.clickInSettingsOfMember()
        DeleteMemberObject.clickDeleteMember()
        DeleteMemberObject.acceptDelete()
    });
});