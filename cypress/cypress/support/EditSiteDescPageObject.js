import BasePageObject from "../support/BasePageObject";

class EditSiteDescPageObject extends BasePageObject {

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
    cy.get('input.peer[placeholder="Site description"]')
      .should('exist')
      .clear()
      .type(this.properties['<NEW_DESC>']);
  }

  putDefaultDescription() {
    cy.get('input.peer[placeholder="Site description"]')
      .should('exist')
      .clear()
      .type('Thoughts, stories and ideas.');
  }

  seeDescriptionContainsNewDescription() {
    cy.get('.gh-header-title')
      .should('contain', 'Smile every day');
  }

  clickSaveDescButton() {
    cy.get('[data-testid="title-and-description"] button.text-green')
      .click();
  }
}

export default new EditSiteDescPageObject()