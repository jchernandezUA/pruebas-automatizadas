import BasePageObject from "./BasePageObject";

class DashboardPageObject extends BasePageObject {

  startNewPost() {
    cy.get(this.elements.newPostBtn)
    .click()
  }
  
  startNewPage(flow = '') {
    cy.get(this.elements.pagesItem).click()
    cy.wait(2000)
    cy.get(this.elements.newPage).then(($buttons) => {
      cy.wrap($buttons[0]).click();
    });
  }

  openFirstPublishedPost() {
    const listPost = cy.get('div[role="menuitem"]').then($items => {
      cy.wrap($items[0]).click()
    }) 
  }

  openFirstPublishedPage() {
    cy.get('li.gh-list-row.gh-posts-list-item')
    .first()
    .click()
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
    .scrollIntoView()
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
    cy.contains('span', 'Newest')
    .click()
    cy.contains('li', 'Recently updated')
    .click()
  
    cy.get('h3.gh-content-entry-title') 
    .first() 
    .invoke('text') 
    .then((textContent) => { 
      let text = textContent.trim();
      expect(text).to.equal(this.properties['<NEW_POST>']);
    });
  }

  clickSettingsIcon() {
    cy.contains('ul.gh-nav-list.gh-nav-settings a', 'General')
      .should('exist')
      .click();
  }

  goToHomepage() {
    cy.visit(this.properties['<URL_HOME_3_4_2>']);
  }

  goToAdminPage() {
    cy.visit(this.properties['<URL_3_4_2>']);
  }

  clickSaveSettingsButton() {
    cy.get('section.view-actions button.gh-btn')
      .contains('Save settings')
      .click();
  }
}

export default new DashboardPageObject()


