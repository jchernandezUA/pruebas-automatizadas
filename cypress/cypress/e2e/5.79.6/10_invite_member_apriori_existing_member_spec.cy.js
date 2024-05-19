const LoginPageObject = require("../../support/LoginPageObject");
const ActionMemberObject = require("../../support/ActionMemberObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");

describe("ghost invite member and validate member exist, use a-priori data", function () {
    let actionMemberObject = new ActionMemberObject;
    //Given 
    beforeEach(() => {
        cy.fixture('dataApriori.json').as('testData');
    });
    it("Invite member", function () {
        //Given 
        LoginPageObject.signIn()
         cy.screenshot("ss_invite_member_01")
        actionMemberObject.clickOnNewMember()
         cy.screenshot("ss_invite_member_02")
        //When 
        for(let i = 0;i <= 1; i++){
            actionMemberObject.clickOnMemberOptions()
            actionMemberObject.enterName(this.testData[i].name)
            actionMemberObject.enterEmail(this.testData[i].email)
            actionMemberObject.enterNote(this.testData[i].note)
            actionMemberObject.clickSave()
            actionMemberObject.back() 
        }
        cy.screenshot("ss_invite_member_03")
        //Then
        //validación
        actionMemberObject.clickOnMemberOptions()
        actionMemberObject.enterName(this.testData[1].name)
        actionMemberObject.enterEmail(this.testData[0].email)
        actionMemberObject.enterNote(this.testData[0].note)
        actionMemberObject.clickSave()
        cy.get('.response')
        .should('be.visible')
        .contains('Member already exists. Attempting to add member with existing email address')
        actionMemberObject.back()
        actionMemberObject.acceptNoChange()
            //Then
            for(let i = 0;i <= 1; i++){
                DeleteMemberObject.clickInSettingsOfMember()
                DeleteMemberObject.clickDeleteMember()
                DeleteMemberObject.acceptDelete()
            }
    });
});