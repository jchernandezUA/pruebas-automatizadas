const LoginPageObject = require("../../support/LoginPageObject");
const ActionMemberObject = require("../../support/ActionMemberObject");
const DeleteMemberObject = require("../../support/DeleteMemberObject");

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
    actionMemberObject.enterNote(member.note)
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
      .should('have.text', member.name);
    cy.screenshot("ss_invite_member_02")
    //Then
    DeleteMemberObject.clickInSettingsOfMember()
    DeleteMemberObject.clickDeleteMember()
    DeleteMemberObject.acceptDelete()
  });
});