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
        actionMemberObject.clickOnNewMember()
        //When 
        actionMemberObject.clickOnMemberOptions()
        actionMemberObject.enterName(member.name)
        actionMemberObject.enterEmail(member.email)
        actionMemberObject.enterNote(member.note_501)
        cy.screenshot("ss_invite_member_01")
        actionMemberObject.clickSave()
        //Then
        //validación
        cy.get('.response')
            .should('be.visible')
            .contains('Note is too long.')
        cy.screenshot("ss_invite_member_02")
        actionMemberObject.back()
        actionMemberObject.acceptNoChange()
    });
});