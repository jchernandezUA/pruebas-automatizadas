import BasePageObject from "../support/BasePageObject";

class EditSiteLangPageObject extends BasePageObject {

  screenshot(number) {
    cy.screenshot('ss_edit_site_lang_0' + number);
  }

  clickLangButton() {
    cy.get('[data-testid="publication-language"] button.cursor-pointer')
      .should('exist')
      .click();
  }

  editLanguage() {
    cy.get('input[placeholder="Site language"]')
      .should('exist')
      .clear()
      .type('es');
  }

  clickSaveLangButton() {
    cy.get('[data-testid="publication-language"] button.text-green')
      .should('exist')
      .click();
  }

  seeEditedLang() {
    cy.get('html')
      .should('exist')
      .invoke('attr', 'lang')
      .should('equal', 'es');
  }

  putDefaultLang() {
    cy.get('input[placeholder="Site language"]')
      .should('exist')
      .clear()
      .type('es');
  }
}

export default new EditSiteLangPageObject()