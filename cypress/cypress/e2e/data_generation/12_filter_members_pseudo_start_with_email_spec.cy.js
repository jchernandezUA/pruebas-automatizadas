const LoginPageObject = require("../../support/LoginPageObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");
const FilterMemberObject = require("../../support/FilterMemberObject");

describe("ghost filter member , use Pseudo data, Validate STARS WITH with incomplete email", function () {
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
        //Given 
        LoginPageObject.signIn()
        FilterMemberObject.clickOnNewMember()
        FilterMemberObject.clickOnMemberOptions()
        FilterMemberObject.enterName(this.testData[0].name)
        FilterMemberObject.enterEmail(this.testData[0].email)
        FilterMemberObject.enterNote(this.testData[0].note)
        FilterMemberObject.clickSave()
        FilterMemberObject.back()
        //When 
        FilterMemberObject.enterFilter()
        FilterMemberObject.clickEmailFilter()
        FilterMemberObject.clickStartsWithFilter()
        FilterMemberObject.enterFilterText(this.testDataFilter.email)
        cy.screenshot("ss_filter_member_02")
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