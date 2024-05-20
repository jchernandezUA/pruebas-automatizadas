const LoginPageObject = require("../../support/LoginPageObject");
const ActionMemberObject = require("../../support/ActionMemberObject");

describe("ghost invite member, LABEL with  251 characters, use random date ", function () {
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
    actionMemberObject.enterLabel(member.label_251)
    cy.screenshot("ss_invite_member_01")
    actionMemberObject.clickSave()
    //Then
    //validación
    cy.get('.response')
      .should('be.visible')
      .contains('Validation failed for name.')
    actionMemberObject.back()
    actionMemberObject.acceptNoChange()

  });
});