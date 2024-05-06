import BasePageObject from "../support/BasePageObject";


class ProfilePageObject extends BasePageObject {

  

  clickOnAvatar() {
    let avatarIcon = cy.get('div.gh-user-avatar.relative')
    avatarIcon.click()
  }

  openProfile() {
    this.clickOnAvatar()
    let profileItem = cy.get(this.elements.profileItem)
    profileItem.click()
  }

  changePassword() {
    this.updatePassword(
      this.properties['<GHOST_PASSWORD>'], 
      this.properties['<GHOST_PASSWORD_NEW>']
    )
  }

  updatePassword(current, newPassword) {
    let changePasswordTxt = cy.contains('span', this.elements.changePassword)
    changePasswordTxt.scrollIntoView();
    changePasswordTxt.click()

    let inputs = []
    cy.get('input[type="password"]').then(($inputs) => {
      cy.wrap($inputs[0]).clear().type(current)
      cy.wrap($inputs[1]).clear().type(newPassword)
      cy.wrap($inputs[2]).clear().type(newPassword)
    })
    this.clickChangePassword()
  }

  clickChangePassword() {
    let changePasswordTxt = cy.contains('span', this.elements.changePassword)
    changePasswordTxt.click()
  }

  resetPassword() {
    this.updatePassword(
      this.properties['<GHOST_PASSWORD_NEW>'],
      this.properties['<GHOST_PASSWORD>']
    )
  }

  updateName() {
    this.changeName(this.properties['<GHOST_NAME_NEW>'])
  }

  changeName(name) {
    cy.get('section[data-testid="user-detail-modal"]')
    .within(() => {
      cy.get('input[type="text"]').then(($inputs) => {
        cy.wrap($inputs[0]).clear().type(name)
      });
    });
    this.saveAndClose()
  }

  saveAndClose() {
    let item = cy.contains('span', this.elements.saveClose)
    item.click()
  }

  back() {
    let btn = utils.waitForElementDisplayed(this.driver, '#done-button')
    return btn.click()
  }

  verifyUpdatedMessage() {
    let text = this.elements.passwordUpdated
    cy.contains('span', text).should('be.visible');
  }

  verifyName() {
    cy.get('div[data-testid="owner-user"]')
    .within(() => {
      cy.get('span').invoke('text').then((text) => {
        expect(text).to.include(this.properties['<GHOST_NAME_NEW>']);
      });
    })
  }

  resetName() {
    cy.contains('button', 'View profile').click({force: true});
    this.changeName(this.properties['<GHOST_NAME>'])
  }

}

export default new ProfilePageObject()