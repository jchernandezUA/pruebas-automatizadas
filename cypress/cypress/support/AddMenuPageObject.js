import BasePageObject from "../support/BasePageObject";

class AddMenuPageObject extends BasePageObject {

  clickSettingsIcon() {
    cy.get('.ember-view.gh-nav-bottom-tabicon')
      .should('exist')
      .click();
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

  goToHomepage() {
    cy.visit(this.properties['<URL_HOME>']);
  }

  seeTheNewItemMenu() {
    cy.get('li.nav-my-new-item.nav-current a')
      .should('have.attr', 'href', `${this.properties['<URL_HOME>']}/`)
      .invoke('text')
      .should('eq', this.properties['<NEW_LABEL>']);
  }

  goToAdminPage() {
    cy.visit(this.properties['<URL>']);
  }

  deleteItemMenu(edited = false) {
    
    var name = this.properties['<NEW_LABEL>']
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