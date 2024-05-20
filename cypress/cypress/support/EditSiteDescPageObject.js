import BasePageObject from "../support/BasePageObject";
import { faker } from '@faker-js/faker';
import descriptions from '../fixtures/aanieves/description.json';

class EditSiteDescPageObject extends BasePageObject {
  UPDATED_DESC = '';

  screenshot(number) {
    cy.screenshot('ss_edit_site_description_0' + number);
  }

  clickDescButton() {
    cy.get('[data-testid="title-and-description"] button.cursor-pointer')
      .contains('Edit')
      .should('exist')
      .click();
  }

  editDescription() {
    this.updateDesc(this.properties['<NEW_DESC>']);
  }

  updateDesc(description) {
    cy.get('input.peer[placeholder="Site description"]')
      .should('exist')
      .clear()
      .type(description);
    this.UPDATED_DESC = description;
  }

  editDescriptionFromJSON() {
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    const description = descriptions[randomIndex].description;
    this.updateDesc(description);
  }

  editDescriptionFromAPI() {
    cy.request({
      method: 'GET',
      url: 'https://my.api.mockaroo.com/description.json?key=6d151b10'
    }).then(response => {
      const descriptionArray = response.body;
      const randomIndex = Math.floor(Math.random() * descriptionArray.length);
      const description = descriptionArray[randomIndex].description;
      this.updateDesc(description);
    });
  }

  editDescriptionUsingFaker() {
    const description = faker.lorem.sentence();
    this.updateDesc(description);
  }

  putDefaultDescription() {
    cy.get('input.peer[placeholder="Site description"]')
      .should('exist')
      .clear()
      .type('Thoughts, stories and ideas.');
  }

  seeDescriptionContainsNewDescription() {
    cy.get('.gh-header-title')
      .should('contain', this.UPDATED_DESC);
  }

  clickSaveDescButton() {
    cy.get('[data-testid="title-and-description"] button.text-green')
      .should('exist')
      .click();
  }
}

export default new EditSiteDescPageObject();
