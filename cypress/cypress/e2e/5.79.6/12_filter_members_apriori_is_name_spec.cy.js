const LoginPageObject = require("../../support/LoginPageObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");
const FilterMemberObject = require("../../support/FilterMemberObject");

describe("ghost filter member , use a-priori data", function () {
    //then
    beforeEach(() => {
        cy.fixture('dataApriori.json').as('testData');
    });

    it("filter member", function () {
        //Given 
        LoginPageObject.signIn()
        cy.screenshot("ss_filter_member_01")
        FilterMemberObject.clickOnNewMember()
        for(let i = 0;i <= 2; i++){
        FilterMemberObject.clickOnMemberOptions()
        FilterMemberObject.enterName(this.testData[i].name)
        FilterMemberObject.enterEmail(this.testData[i].email)
        FilterMemberObject.enterNote(this.testData[i].note)
        FilterMemberObject.clickSave()
        FilterMemberObject.back()
        }
        cy.screenshot("ss_filter_member_02")
        //When 
        cy.getRandomIntInRange(0, 3).then(randomInt => {
            let randomNumber = randomInt
            FilterMemberObject.enterFilter()
            cy.screenshot("ss_filter_member_03")
            FilterMemberObject.clickContainFilter()
            cy.screenshot("ss_filter_member_04")
            FilterMemberObject.enterFilterText(this.testData[randomNumber].name)
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
                .should('have.text', this.testData[randomNumber].name);
            cy.screenshot("ss_filter_member_07")
        });
        //Then
        for(let i = 0;i <= 2; i++){
            DeleteMemberObject.clickInSettingsOfMember()
            DeleteMemberObject.clickDeleteMember()
            DeleteMemberObject.acceptDelete()
            if (i <  1) {
            FilterMemberObject.clickShowAllMembers(); 
           }
        }
    });
});