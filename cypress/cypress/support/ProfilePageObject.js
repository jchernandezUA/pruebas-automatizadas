import { fa, th } from "@faker-js/faker";
import BasePageObject from "../support/BasePageObject";
import { expect } from "chai";


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

  resetPassword(current = this.properties['<GHOST_NAME_NEW>']) {
    this.updatePassword(
      current,
      this.properties['<GHOST_PASSWORD>']
    )
  }

  changeName(name = this.properties['<GHOST_NAME_NEW>']) {
    cy.get('section[data-testid="user-detail-modal"]')
    .within(() => {
      cy.get('input[type="text"]').then(($inputs) => {
        cy.wrap($inputs[0]).clear().type(name)
      });
    });
  }

  changeWebsite(website) {
    cy.get('section[data-testid="user-detail-modal"]')
    .within(() => {
      cy.get('input[type="text"]').then(($inputs) => {
        cy.wrap($inputs[4]).clear().type(website)
      });
    });
  }

  changeBio(bio) {
    cy.get('section[data-testid="user-detail-modal"]')
    .within(() => {
      cy.get('textArea')
      .clear()
      .type(`${bio}`)
    });
  }

  changeValue(position, value) {
    cy.get('section[data-testid="user-detail-modal"]')
    .within(() => {
      cy.get('input[type="text"]').then(($inputs) => {
        cy.wrap($inputs[position]).clear().type(`${value}`)
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

  verifyError(error) {
    var found = false
    cy.get('span.mt-1.inline-block').each($span => {
      const textoDelSpan = $span.text();
      if (textoDelSpan === error) {
        found = true
        expect(textoDelSpan).to.equal(error);
      }
    }).then(() => {
      if (!found)
        throw new Error(`Ningún span encontrado con el texto "${error}"`);
    });
  }

  verifyPopupError() {
    cy.get('div.flex.items-start.gap-3').should('be.visible')
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

  verifyName(name = this.properties['<GHOST_NAME>']) {
    cy.wait(2000)
    cy.get('div[data-testid="owner-user"]')
    .within(() => {
      cy.get('span').invoke('text').then((text) => {
        expect(text).to.include(name);
      });
    })
  }
}

export default new ProfilePageObject()