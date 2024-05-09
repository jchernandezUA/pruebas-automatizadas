import BasePageObject from "../support/BasePageObject";


class ProfilePageObject extends BasePageObject {

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

  changeName() {
    let name = this.properties['<GHOST_NAME_NEW>']
    cy.get('section[data-testid="user-detail-modal"]')
    .within(() => {
      cy.get('input[type="text"]').then(($inputs) => {
        cy.wrap($inputs[0]).clear().type(name)
      });
    });
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

  resetName() {
    let name = this.properties['<GHOST_NAME>']
    cy.contains('button', 'View profile')
    .click({force: true});
    cy.get('section[data-testid="user-detail-modal"]')
    .within(() => {
      cy.get('input[type="text"]').then(($inputs) => {
        cy.wrap($inputs[0]).clear().type(name)
      });
    });
    this.saveAndClose()
  }

  verifyName() {
    cy.get('div[data-testid="owner-user"]')
    .within(() => {
      cy.get('span').invoke('text').then((text) => {
        expect(text).to.include(this.properties['<GHOST_NAME_NEW>']);
      });
    })
  }
}

export default new ProfilePageObject()