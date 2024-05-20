import BasePageObject from '../support/BasePageObject';
import {faker} from '@faker-js/faker';
import ITEMS from '../fixtures/aanieves/new_item.json';

class AddMenuPageObject extends BasePageObject {

  MENU_LABEL = '';

  screenshot(number) {
    cy.screenshot('ss_add_menu_item_0' + number, {
      capture: 'viewport',
      clip: { x: 0, y: 0, width: 1000, height: 660 }
    });
  }

  clickNavigationCustomizeButton() {
    cy.get('[data-testid="navigation"] button.cursor-pointer')
      .should('exist')
      .click();
  }

  enterNewLabel() {
    this.addLabel(this.properties['<NEW_LABEL>'])
  }

  addLabel(label) {
    cy.get('input.peer[placeholder="New item label"]:visible')
      .should('exist')
      .click()
      .type(label);
    this.MENU_LABEL = label;
  }

  clickNavigationCustomizeOkButton() {
    cy.get('button.bg-black')
      .contains('OK')
      .click();
  }

  seeTheNewItemMenu() {
    cy.get('ul.nav > li:nth-child(3) > a')
      .invoke('text')
      .should('eq', this.MENU_LABEL);
  }

  deleteItemMenu() {
    let name = this.MENU_LABEL;

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

  addMenuItemWithRandomLabel() {
    const label = faker.lorem.word();
    this.addLabel(label);
  }

  addMenuItemWithLabelFromJSON() {
    const randomIndex = Math.floor(Math.random() * ITEMS.length);
    const label = ITEMS[randomIndex].label;
    this.addLabel(label);
  }

  addMenuItemFromAPI() {
    cy.request({
      method: 'GET',
      url: 'https://my.api.mockaroo.com/new_item.json?key=6d151b10'
    }).then(response => {
      const itemArray = response.body;
      const randomIndex = Math.floor(Math.random() * itemArray.length);
      const label = itemArray[randomIndex].label;
      this.addLabel(label);
    });
  }
}

export default new AddMenuPageObject();
