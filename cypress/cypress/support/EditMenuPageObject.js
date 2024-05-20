import BasePageObject from "../support/BasePageObject";
import ITEMS from '../fixtures/aanieves/new_item.json';
const { faker } = require('@faker-js/faker');

class EditMenuPageObject extends BasePageObject {

  LABEL = '';

  screenshot(number) {
    cy.screenshot('ss_edit_menu_item_0' + number);
  }

  editLabel() {
    this.updateLabel(this.properties['<EDIT_LABEL>'])
  }

  updateLabel(label) {
    cy.get('input[value="My new item"]')
      .should('exist')
      .clear()
      .type(label);
    this.LABEL = label;
  }

  seeTheEditedItemMenu() {
    cy.get('ul.nav > li:nth-child(3) > a')
      .invoke('text')
      .should('eq', this.LABEL);
  }

  editMenuItemWithFakerLabel() {
    const label = faker.lorem.word();
    this.updateLabel(label);
  }

  editMenuItemWithAPI() {
    cy.request({
      method: 'GET',
      url: 'https://my.api.mockaroo.com/new_item.json?key=6d151b10'
    }).then((response) => {
      const label = this.getLabelFromResponse(response);
      this.updateLabel(label);
    });
  }

  editMenuItemWithJSON() {
    const randomIndex = Math.floor(Math.random() * ITEMS.length);
    const label = ITEMS[randomIndex].label;
    this.updateLabel(label);
  }

  getLabelFromResponse(response) {
    const itemsArray = response.body;
    const randomIndex = Math.floor(Math.random() * itemsArray.length);
    return itemsArray[randomIndex].label;
  }

  deleteItemMenu() {
    let name = this.LABEL;

    cy.get('section[data-testid="navigation-modal"]')
      .within(() => {
        cy.get('div.group')
          .each(($div) => {
            cy.get($div)
              .within(() => {
                cy.get('input').invoke('val').then((inputValue) => {
                  if (inputValue === name) {
                    cy.wrap('button[type="button"]');
                    cy.get('button[type="button"]').click({ multiple: true });
                  }
                });
              });
          });
      });
  }
}

export default new EditMenuPageObject();
