import BasePageObject from "./BasePageObject";

class SitePrivatePageObject extends BasePageObject {

  screenshot(number) {
    cy.screenshot('ss_site_private_0' + number, {
      capture: 'viewport',
      clip: { x: 0, y: 0, width: 1000, height: 660 }
    });
  }

  clickSitePrivateButton() {
    cy.get('input#settings-private')
      .should('exist')
      .click({force: true});
  }

  setPrivatePassword() {
    cy.get('input[name="general[password]"]')
      .should('exist')
      .clear()
      .type(this.properties['<GHOST_PRIVATE_PASSWORD>']);
  }

  seePrivateWarningText() {
    cy.get('header h1')
      .invoke('text')
      .should('eq', 'This site is private');
  }
}

export default new SitePrivatePageObject()