const LoginPageObject = require("../../support/LoginPageObject");
const ActionMemberObject = require("../../support/ActionMemberObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");

describe("ghost invite 5 member, use a-priori data", function () {
    let actionMemberObject = new ActionMemberObject;
    //Given 
    beforeEach(() => {
        cy.fixture('dataApriori.json').as('testData');
    });
    it("Invite member", function () {
        //Given 
        LoginPageObject.signIn()
        actionMemberObject.clickOnNewMember()
        //When 
        this.testData.map(res=>{
            actionMemberObject.clickOnMemberOptions()
            actionMemberObject.enterName(res.name)
            actionMemberObject.enterEmail(res.email)
            actionMemberObject.enterNote(res.note)
            cy.screenshot("ss_invite_member_01")
            actionMemberObject.clickSave()
            actionMemberObject.back()
            //Then
            //validación
            cy.get('tr[data-test-list="members-list-item"]')
                .should('be.visible');
            cy.get('tr[data-test-list="members-list-item"]')
                .find('a').first()
                .find('h3')
                .should('have.text', res.name);
            cy.screenshot("ss_invite_member_02")
            //Then
            DeleteMemberObject.clickInSettingsOfMember()
            DeleteMemberObject.clickDeleteMember()
            DeleteMemberObject.acceptDelete()
        })
    });
});