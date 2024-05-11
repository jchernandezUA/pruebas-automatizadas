import BasePageObject from "../support/BasePageObject";

class EditMenuPageObject extends BasePageObject {
  editLabel() {
    cy.get('input[value="My new item"]')
      .should('exist')
      .clear()
      .type(this.properties['<EDIT_LABEL>']);
  }

  seeTheEditedItemMenu() {
    cy.get('.nav-my-new-itemv2 > a')
      .invoke('text')
      .should('eq', this.properties['<EDIT_LABEL>']);
  }
}

export default new EditMenuPageObject()