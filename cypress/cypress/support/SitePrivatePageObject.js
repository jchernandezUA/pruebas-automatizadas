import BasePageObject from "../support/BasePageObject";
import passwords from '../fixtures/aanieves/password.json';
const { faker } = require('@faker-js/faker');

class SitePrivatePageObject extends BasePageObject {

  screenshot(number) {
    cy.screenshot('ss_site_private_0' + number);
  }

  getRandomPassword() {
    const randomNumber = Math.floor(Math.random() * passwords.length);
    return passwords[randomNumber].password;
  }

  getRandomPasswordFromAPI() {
    return cy.request({
      method: 'GET',
      url: 'https://my.api.mockaroo.com/password.json?key=6d151b10'
    }).then(response => {
      const passwordArray = response.body;
      const randomNumber = Math.floor(Math.random() * passwordArray.length);
      return passwordArray[randomNumber].password;
    });
  }

  setRandomPrivatePassword() {
    const password = this.getRandomPassword();
    cy.get('input[placeholder="Enter password"]')
      .should('exist')
      .clear()
      .type(password);
  }

  setRandomPrivatePasswordFromAPI() {
    this.getRandomPasswordFromAPI().then(password => {
      cy.get('input[placeholder="Enter password"]')
        .should('exist')
        .clear()
        .type(password);
    });
  }

  setFakerPrivatePassword(){
    let password = faker.location.countryCode();
    cy.get('input[placeholder="Enter password"]')
      .should('exist')
      .clear()
      .type(password);
  }

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
