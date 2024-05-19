const LoginPageObject = require("../../support/LoginPageObject");
const ActionMemberObject = require("../../support/ActionMemberObject");

describe("ghost invite member, NOTE with  501 characters, use random date ", function () {
    let actionMemberObject = new ActionMemberObject;
    let member;

    //Given 
    beforeEach(() => {
        cy.generateFakerData().then((generatedData) => {
          member = generatedData;
        });
      });
    it("Invite member", function () {

        //Given 
        LoginPageObject.signIn()
        cy.screenshot("ss_invite_member_01")
        actionMemberObject.clickOnNewMember()
        cy.screenshot("ss_invite_member_02")
        //When 
        actionMemberObject.clickOnMemberOptions()
        cy.screenshot("ss_invite_member_03")
        actionMemberObject.enterName(member.name)
        cy.screenshot("ss_invite_member_04")
        actionMemberObject.enterEmail(member.email)
        cy.screenshot("ss_invite_member_05")
        actionMemberObject.enterNote(member.note_501)
        cy.screenshot("ss_invite_member_06")
        actionMemberObject.clickSave()
        cy.screenshot("ss_invite_member_07")
        //Then
        //validación
        cy.get('.response')
            .should('be.visible')
            .contains('Note is too long.')
        cy.screenshot("ss_invite_member_08")
        actionMemberObject.back()
    });
});