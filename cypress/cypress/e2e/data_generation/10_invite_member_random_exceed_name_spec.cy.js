const LoginPageObject = require("../../support/LoginPageObject");
const ActionMemberObject = require("../../support/ActionMemberObject");

describe("ghost invite member, NAME with  251 characters, use random date ", function () {
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
        actionMemberObject.enterName(member.name_251)
        cy.screenshot("ss_invite_member_01")
        actionMemberObject.enterEmail(member.email)
        actionMemberObject.enterNote(member.note)
        actionMemberObject.clickSave()
        cy.screenshot("ss_invite_member_02")
        //Then
        actionMemberObject.back()
        actionMemberObject.acceptNoChange()
    });
});