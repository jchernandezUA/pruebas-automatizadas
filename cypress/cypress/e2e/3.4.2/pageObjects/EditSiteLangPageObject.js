import BasePageObject from "./BasePageObject";

class EditSiteLangPageObject extends BasePageObject {

  screenshot(number) {
    cy.screenshot('ss_edit_site_lang_0' + number, {
      capture: 'viewport',
      clip: { x: 0, y: 0, width: 1000, height: 660 }
    });
  }

  clickLangButton() {
    cy.contains('.gh-setting-title', 'Publication Language')
      .parent('.gh-setting-content')
      .siblings('.gh-setting-action')
      .find('button')
      .should('exist')
      .click();
  }

  editLanguage() {
    cy.get('.gh-setting-content-extended')
      .find('input.ember-text-field')
      .should('exist')
      .clear()
      .type('es', { force: true });
  }

  seeEditedLang() {
    cy.get('html')
      .should('exist')
      .invoke('attr', 'lang')
      .should('equal', 'es');
  }

  putDefaultLang() {
    cy.get('.gh-setting-content-extended')
      .find('input.ember-text-field')
      .should('exist')
      .clear()
      .type('en', { force: true });
  }
}

export default new EditSiteLangPageObject()