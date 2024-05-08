import BasePageObject from "../support/BasePageObject";

class PagePostPageObject extends BasePageObject {

  typeTitle() {
    const textArea = cy.get('textarea')
    textArea.type(this.properties['<NEW_POST>'])
    cy.get('p[data-koenig-dnd-droppable="true"]')
    .click()
  }

  publish() {
    cy.wait(1000)
    cy.contains('span', 'Publish')
    .click()
    const continueButton = cy.get(this.elements.continueBtn)
    continueButton.click()
    const publishNowBtn = cy.get(this.elements.publishNowBtn)
    publishNowBtn.click()
    cy.get('button[data-test-button="close-publish-flow"]').click()
  }

  addTag() {
    const inputSearch = 'input.ember-power-select-trigger-multiple-input'
    cy.get(inputSearch).then(($inputs) => {
      cy.wrap($inputs[0]).clear()
      .type(this.properties['<NEW_TAG>'], {force: true})
      .type('{enter}', {force: true});
    })
    this.openSettings()
    this.clickUpdate()
    this.back('Post')
  }

  clickUpdate() {
    cy.contains('span', 'Update')
    .click()
  }

  saveChanges() {
    const updateBtn = utils.waitForElementDisplayed(
      this.driver,
      this.elementsSearch.updateBtn
    )
    updateBtn.click()
  }

  deleteTag() {
    this.openSettings()
    cy.get('#tag-input')
    .click()
    .type('{backspace}')
    this.openSettings()
    this.clickUpdate()
    this.back()
  }

  openSettings() {
    const settingsButton = cy.get(this.elements.postSettingsBtn)
    settingsButton.click()
  }

  back(type) {
    cy.contains('a', 'Posts')
    .click()
  }

  backPages() {
    cy.contains('a', 'Pages')
    .click()
  }

  deletePage() {
    this.openSettings()
    cy.contains('span', 'Delete')
    .scrollIntoView()
    .click()

    cy.get('span[data-test-task-button-state="idle"]')
    .each(($span)  => {
      const spanText = $span.text().trim();
      if (spanText == 'Delete') {
        $span.click()
      }
    })

  }
}

export default new PagePostPageObject()
