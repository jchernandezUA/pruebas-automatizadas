// pageObjects/PostFilterPageObject.js

class PostFilterPageObject {
    constructor() {
        this.filterMenuTrigger = '.gh-contentfilter-menu .ember-basic-dropdown-trigger';
        this.filterOption = '.ember-power-select-option';
    }

    navigateToPosts() {
        cy.visit('http://localhost:2370/ghost/#/posts');
        cy.wait(4000); // Wait to ensure the page is fully loaded
        cy.screenshot('ss_filter_posts_page_loaded');
    }

    applyFilter(filterName) {
        cy.get(this.filterMenuTrigger).first().click();
        cy.screenshot('ss_filter_dropdown_opened');
        cy.wait(1000);

        cy.get(this.filterOption).contains(filterName).click();
        cy.wait(5000);
        cy.screenshot('ss_filter_applied');
    }
}

module.exports = new PostFilterPageObject();
