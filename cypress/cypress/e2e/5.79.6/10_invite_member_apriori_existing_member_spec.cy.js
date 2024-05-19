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
            cy.screenshot("ss_invite_member_03")
            actionMemberObject.enterName(this.testData[i].name)
            cy.screenshot("ss_invite_member_04")
            actionMemberObject.enterEmail(this.testData[i].email)
            cy.screenshot("ss_invite_member_05")
            actionMemberObject.enterNote(this.testData[i].note)
            cy.screenshot("ss_invite_member_06")
            actionMemberObject.clickSave()
            cy.screenshot("ss_invite_member_07")
            if(i=== 0){
                actionMemberObject.back()
            }
            //Then
            //validación
            if(i === 1){
                cy.get('.response')
                .should('be.visible')
                .contains('Member already exists. Attempting to add member with existing email address')
                cy.screenshot("ss_invite_member_08")
                actionMemberObject.back()
                actionMemberObject.acceptNoChange()
            }
        }
            //Then
            DeleteMemberObject.clickInSettingsOfMember()
            DeleteMemberObject.clickDeleteMember()
            DeleteMemberObject.acceptDelete()
       
    });
});