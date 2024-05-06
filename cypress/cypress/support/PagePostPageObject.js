import BasePageObject from "../support/BasePageObject";

class PagePostPageObject extends BasePageObject {


  createNew() {
    const textArea = cy.get('textarea')
    textArea.type(this.properties['<NEW_POST>'])
    const contentElement = cy.get('p[data-koenig-dnd-droppable="true"]')
    contentElement.click()
    this.pubish()
  }

  pubish() {
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
    this.back()
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
    const inputTag = utils.waitForElementDisplayed(this.driver, '#tag-input')
    inputTag.click()
    inputTag.keys('Backspace')
  }

  openSettings() {
    const settingsButton = cy.get(this.elements.postSettingsBtn)
    settingsButton.click()
  }

  back(type) {
    cy.contains('a', 'Posts')
    .click()
  }
}

export default new PagePostPageObject()