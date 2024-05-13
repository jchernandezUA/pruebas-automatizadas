import BasePageObject from "../support/BasePageObject";

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
    cy.get('input.peer[placeholder="New item label"]:visible')
      .should('exist')
      .click()
      .type(this.properties['<NEW_LABEL>']);
  }

  clickNavigationCustomizeOkButton() {
    cy.get('button.bg-black')
      .contains('OK')
      .click();
  }

  seeTheNewItemMenu() {
    cy.get('li.nav-my-new-item.nav-current a')
      .invoke('text')
      .should('eq', this.properties['<NEW_LABEL>']);
  }

  deleteItemMenu(edited = false) {
    let name = this.properties['<NEW_LABEL>'];
    if (edited) {
      name = this.properties['<EDIT_LABEL>']
    }

    cy.get('section[data-testid="navigation-modal"]')
      .within(() => {
        cy.get('div.group')
          .each(($div)=> {
            cy.get($div)
              .within(() => {
                cy.get('input').invoke('val').then((inputValue) => {
                  if (inputValue == name) {
                    cy.wrap('button[type="button"]')
                    cy.get('button[type="button"]').click({multiple: true})
                  }
                });
              })
          })
      })
  }
}

export default new AddMenuPageObject()