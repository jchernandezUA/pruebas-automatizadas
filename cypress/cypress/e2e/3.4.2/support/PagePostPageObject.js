import BasePageObject from "../support/BasePageObject";

class PagePostPageObject extends BasePageObject {

  typeTitle() {
    const textArea = cy.get('textarea[placeholder="Post Title"]')
    textArea.type(this.properties['<NEW_POST>'])
    cy.get('div.koenig-editor__editor-wrapper')
    .click()
  }

  publish() {
    cy.wait(1000)
    cy.contains('span', 'Publish')
    .click()
    /*const continueButton = cy.get(this.elements.continueBtn)
    continueButton.click()
    const publishNowBtn = cy.get(this.elements.publishNowBtn)
    publishNowBtn.click()
    cy.get('button[data-test-button="close-publish-flow"]').click()*/
    cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
    .click()
    cy.wait(1000)
  }

  addTag() {
    const inputSearch = 'input.ember-power-select-trigger-multiple-input'
    cy.get(inputSearch).then(($inputs) => {
      cy.wrap($inputs[0]).clear()
      .type(this.properties['<NEW_TAG>'], {force: true})
      .type('{enter}', {force: true});
    })
    this.closeSettings()
    this.clickUpdate()
    this.back('Post')
  }

  closeSettings() {
    cy.get('button[aria-label="Close"]')
    .click()
  }

  clickUpdate() {
      cy.wait(1000)
      cy.contains('span', 'Update')
      .click()
      /*const continueButton = cy.get(this.elements.continueBtn)
      continueButton.click()
      const publishNowBtn = cy.get(this.elements.publishNowBtn)
      publishNowBtn.click()
      cy.get('button[data-test-button="close-publish-flow"]').click()*/
      cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
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
