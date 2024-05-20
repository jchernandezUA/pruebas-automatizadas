import BasePageObject from '../support/BasePageObject';
import {faker} from '@faker-js/faker';
import ITEMS from '../fixtures/aanieves/new_item.json';

class AddMenuPageObject extends BasePageObject {

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
    const label = this.properties['<NEW_LABEL>'];
    this.addLabel(label)
    return label;
  }

  addLabel(label) {
    cy.get('input.peer[placeholder="New item label"]:visible')
      .should('exist')
      .click()
      .type(label);
  }

  clickNavigationCustomizeOkButton() {
    cy.get('button.bg-black')
      .contains('OK')
      .click();
  }

  seeTheNewItemMenu(label) {
    cy.get('nav.gh-navigation-menu ul.nav li:nth-child(3) a')
      .invoke('text')
      .should('eq', label);
  }

  deleteItemMenu(label) {
    const name = label;

    cy.get('section[data-testid="navigation-modal"]').within(() => {
      cy.get('div.group').each(($div) => {
        cy.wrap($div).within(() => {
          cy.get('input[type="text"]').then(($input) => {
            const inputValue = $input.val();
            if (inputValue === name) {
              cy.wrap($div).within(() => {
                cy.get('button[type="button"]')
                  .last()
                  .should('exist')
                  .click();
              });
            }
          });
        });
      });
    });
  }

  addMenuItemWithRandomLabel() {
    const label = faker.lorem.word();
    this.addLabel(label);
    return label;
  }

  addMenuItemWithLabelFromJSON() {
    const randomIndex = Math.floor(Math.random() * ITEMS.length);
    const label = ITEMS[randomIndex].label;
    this.addLabel(label);
    return label;
  }

  addMenuItemFromAPI() {
    let label = '';
    label = cy.request({
      method: 'GET',
      url: 'https://my.api.mockaroo.com/new_item.json?key=6d151b10'
    }).then(response => {
      const itemArray = response.body;
      const randomIndex = Math.floor(Math.random() * itemArray.length);
      label = itemArray[randomIndex].label;
      return this.addLabel(label);
    });
    return label;
  }
}

export default new AddMenuPageObject();
