import BasePageObject from "../support/BasePageObject";

class DashboardPageObject extends BasePageObject {

  startNewPost() {
    cy.get(this.elements.newPostBtn)
    .click()
  }
  
  startNewPage(flow = '') {
    cy.get(this.elements.pagesItem).click()
    cy.wait(1000)
    cy.get(this.elements.newPage).click()
  }

  openFirstPublishedPost() {
    const listPost = cy.get('div[role="menuitem"]').then($items => {
      cy.wrap($items[0]).click()
    }) 
  }

  openFirstPublishedPage() {
    const listPost = cy.get('div[role="menuitem"]').then($items => {
      cy.wrap($items[0]).click()
    }) 
  }

  clickPublished() {
    cy.get('a[title="Published"]')
    .click()
  }

  openProfile() {
    let profileItem = cy.get('a[href="#/staff/user/"]')
    profileItem.click()
  }

  clickOnAvatar() {
    cy.get('div.gh-user-avatar.relative')
    .click()
  }

  verifyTag() {

    this.clickPublished()

    cy.get('li.gh-list-row.gh-posts-list-item')
    .first()
    .find('a.ember-view.permalink.gh-list-data.gh-post-list-title')
    .find(this.elements.contentEntryMeta)
    .within(() => {
      var matches = false
      cy.get('span').each(($span) => {
        const spanText = $span.text().trim();
        const tag = this.properties['<NEW_TAG>']
        if (spanText == tag) {
          matches = true
        }
      }).then(() => {
        return expect(matches).to.be.true;
      })
    })
  }

  verifyPostWithNoTag() {
    cy.get(this.elements.postList)
    .first()
    .find('a')
    .first()
    .find(this.elements.contentEntryMeta)
    .within(() => {
      cy.get('span').each(($span) => {
        const spanText = $span.text().trim();
         expect(spanText).to.not.equal(this.properties['<NEW_TAG>']);
      })
    })
  }

  verifyPage() {
    cy.get(this.elements.postList)
    .first()
    .find('a')
    .first()
    .find('h3.gh-content-entry-title').then(($title) => {
      let text = $title.text().trim()
      expect(text).to.equal(this.properties['<NEW_POST>']);
    })
  }
}

export default new DashboardPageObject()


