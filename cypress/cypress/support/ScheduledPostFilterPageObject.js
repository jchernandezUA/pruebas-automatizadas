// pageObjects/ScheduledPostFilterPageObject.js
const Utils = require('./Utils')

class ScheduledPostFilterPageObject {
    constructor() {
        this.postsUrl = '/ghost/#/posts';
        this.filterMenuTrigger = '.gh-contentfilter-menu .ember-basic-dropdown-trigger';
        this.filterOption = '.ember-power-select-option';
    }

    navigateToPosts() {
        cy.visit(this.postsUrl);
        cy.wait(4000); // Ensure the posts page is fully loaded
        Utils.screenshot('ss_filter_scheduled_posts_page_loaded');
    }

    applyScheduledPostsFilter() {
        cy.get(this.filterMenuTrigger).first().click();
        Utils.screenshot('ss_filter_scheduled_dropdown_opened');
        cy.wait(1000); // Wait for the dropdown to fully open

        cy.get(this.filterOption).contains('Scheduled posts').click();
        cy.wait(5000); // Wait for the filter to be applied
        Utils.screenshot('ss_filter_scheduled_filter_applied');
    }
}

module.exports = new ScheduledPostFilterPageObject();
