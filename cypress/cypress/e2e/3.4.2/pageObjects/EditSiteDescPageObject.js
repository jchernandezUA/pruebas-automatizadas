import BasePageObject from "./BasePageObject";

class EditSiteDescPageObject extends BasePageObject {

  screenshot(number) {
    cy.screenshot('ss_edit_site_description_0' + number, {
      capture: 'viewport',
      clip: { x: 0, y: 0, width: 1000, height: 660 }
    });
  }

  clickDescButton() {
    cy.contains('.gh-setting-title', 'Title & description')
      .parent('.gh-setting-content')
      .siblings('.gh-setting-action')
      .find('button')
      .should('exist')
      .click();
  }

  editDescription() {
    cy.contains('.description-container p', 'Used in your theme, meta data and search results')
      .siblings('input.ember-text-field')
      .should('exist')
      .clear()
      .type(this.properties['<NEW_DESC>'], {force: true});
  }

  putDefaultDescription() {
    cy.contains('.description-container p', 'Used in your theme, meta data and search results')
      .siblings('input.ember-text-field')
      .should('exist')
      .clear()
      .type('Thoughts, stories and ideas.', {force: true});
  }

  seeDescriptionContainsNewDescription() {
    cy.get('.site-header-content h2.site-description')
      .should('contain', 'Smile every day');
  }

  clickSaveDescButton() {
    cy.get('section.view-actions button.gh-btn')
      .contains('Save settings')
      .click();
  }
}

export default new EditSiteDescPageObject()