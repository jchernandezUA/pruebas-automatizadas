import BasePageObject from "../support/BasePageObject";

class DashboardPageObject extends BasePageObject {

  startNewPost() {
    const newPostButton = cy.get(this.elements.newPostBtn)
    newPostButton.click()
  }

  openFirstPublishedPost() {
    const navElement = cy.get('a[title="Published"]')
    navElement.click()
    const selectorSearch = this.elements.selectorSearch
    const listPost = utils.waitForElementsDisplayed(this.driver, selectorSearch)
    listPost[0].click()
  }

  openPages() {
    const navElement = utils.waitForElementDisplayed(
      this.driver,
      this.elements.pagesItem)
    navElement.click()
  }

  startNewPage() {
    const newBtn = utils.waitForElementDisplayed(this.driver, this.elements.newPage)
    newBtn.click()
  }
  
  
  verifyTag() {

    cy.get('a[title="Published"]')
    .click()

    cy.get(this.elements.postList)
    .first()
    .find('a')
    .first()
    .find(this.elements.contentEntryMeta)
    .within(() => {
      var matches = false
      cy.get('span').each(($span) => {
        const spanText = $span.text().trim();
        cy.wrap($span)
        const tag = this.properties['<NEW_TAG>']
        if (spanText == tag) {
          matches = true
        }
      }).then(() => {
        return expect(matches).to.be.true;
      })
    })
  }

}

export default new DashboardPageObject()


