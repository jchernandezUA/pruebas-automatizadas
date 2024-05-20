import BasePageObject from "../support/BasePageObject";
import { faker } from '@faker-js/faker';
import passwords from '../fixtures/aanieves/password.json';

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
      return passwordArray[Math.floor(Math.random() * passwordArray.length)].password;
    });
  }

  setRandomPrivatePassword() {
    const password = this.getRandomPassword();
    this.enterPassword(password);
  }

  setRandomPrivatePasswordFromAPI() {
    this.getRandomPasswordFromAPI().then(password => {
      this.enterPassword(password);
    });
  }

  setFakerPrivatePassword(){
    const password = faker.location.countryCode();
    this.enterPassword(password);
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
    const ghostPassword = this.properties['<GHOST_PRIVATE_PASSWORD>'];
    this.enterPassword(ghostPassword);
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

  enterPassword(password) {
    cy.get('input[placeholder="Enter password"]')
      .should('exist')
      .clear()
      .type(password);
  }
}

export default new SitePrivatePageObject();
