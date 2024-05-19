const LoginPageObject = require("../../support/LoginPageObject");
const ActionMemberObject = require("../../support/ActionMemberObject");

describe("ghost invite member,  email invalid use Pseudo data", function () {
    let actionMemberObject = new ActionMemberObject;
    //Given 
    beforeEach(() => {
        cy.request('https://my.api.mockaroo.com/api_ghost.json?key=4c651d10')
            .then((response) => {
                expect(response.status).to.eq(200);
                cy.wrap(response.body).as('testData');
            })
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
        actionMemberObject.enterName(this.testData.name)
        cy.screenshot("ss_invite_member_04")
        actionMemberObject.enterEmail(this.testData.email)
        cy.screenshot("ss_invite_member_05")
        actionMemberObject.enterNote(this.testData.note)
        cy.screenshot("ss_invite_member_06")
        actionMemberObject.clickSave()
        cy.screenshot("ss_invite_member_07")
        //Then
        //validación
        cy.get('.response')
            .should('be.visible')
            .contains('Invalid Email.')
        cy.screenshot("ss_invite_member_08")
        actionMemberObject.back()
        actionMemberObject.acceptNoChange()
    });
});