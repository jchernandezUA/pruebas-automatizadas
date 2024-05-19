import BasePageObject from "../support/BasePageObject";
import { faker } from '@faker-js/faker';
import langs from '../fixtures/aanieves/lang.json';

class EditSiteLangPageObject extends BasePageObject {
  LANG = '';

  screenshot(number) {
    cy.screenshot('ss_edit_site_lang_0' + number);
  }

  clickLangButton() {
    cy.get('[data-testid="publication-language"] button.cursor-pointer')
      .should('exist')
      .click();
  }

  editLanguage() {
    this.updateLanguage('es');
  }

  updateLanguage(language) {
    cy.get('input[placeholder="Site language"]')
      .should('exist')
      .clear()
      .type(language);
    this.LANG = language;
  }

  clickSaveLangButton() {
    cy.get('[data-testid="publication-language"] button.text-green')
      .should('exist')
      .click();
  }

  seeEditedLang() {
    cy.get('html')
      .should('exist')
      .then(($html) => {
        const lang = $html.attr('lang');
        expect(lang).to.equal(this.LANG);
      });
  }

  putDefaultLang() {
    cy.get('input[placeholder="Site language"]')
      .should('exist')
      .clear()
      .type('en');
  }

  editLanguageUsingFaker() {
    const language = faker.lorem.word();
    this.updateLanguage(language);
  }

  editLanguageFromJSON() {
    const randomNumber = Math.floor(Math.random() * langs.length);
    this.updateLanguage(langs[randomNumber]['lang']);
  }

  editLanguageFromAPI() {
    cy.request({
      method: 'GET',
      url: 'https://my.api.mockaroo.com/lang.json?key=6d151b10'
    }).then(response => {
      const langArray = response.body;
      const randomNumber = Math.floor(Math.random() * langArray.length);
      this.updateLanguage(langArray[randomNumber]['lang']);
    });
  }
}

export default new EditSiteLangPageObject();
