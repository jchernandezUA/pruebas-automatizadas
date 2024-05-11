import BasePageObject from "../support/BasePageObject";

class SitePrivatePageObject extends BasePageObject {

  clickSitePrivateButton() {
    cy.get('[data-testid="locksite"] button.cursor-pointer')
      .should('exist')
      .click();
  }

  switchPrivate() {
    cy.contains('label', 'Enable password protection')
      .prev('input[type="checkbox"][role="switch"]')
      .should('exist')
      .click();
  }

  setPrivatePassword() {
    cy.get('input[placeholder="Enter password"]')
      .should('exist')
      .clear()
      .type(this.properties['<GHOST_PRIVATE_PASSWORD>']);
  }

  clickSavePrivateButton() {
    cy.get('[data-testid="locksite"] button.text-green')
      .should('exist')
      .click();
  }

  seePrivateWarningText() {
    cy.get('section.gh-flow-content.private header h1')
      .invoke('text')
      .should('eq', 'This site is private.');
  }

}

export default new SitePrivatePageObject()