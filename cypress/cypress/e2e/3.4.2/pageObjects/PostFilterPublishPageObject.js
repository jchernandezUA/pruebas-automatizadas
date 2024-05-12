// pageObjects/PostFilterPageObject.js
import BasePageObject from "./BasePageObject";
class PostFilterPageObject extends BasePageObject {
    constructor() {
        super();
        this.filterMenuTrigger = '.gh-contentfilter-menu .ember-basic-dropdown-trigger';
        this.filterOption = '.ember-power-select-option';
    }

    navigateToPosts() {
        cy.visit(`${this.properties["<URL>"]}/#/posts`);
        cy.wait(4000); // Espera para asegurar que la página cargue completamente
        cy.screenshot('ss_filter_publish_posts_page_loaded');
    }

    applyFilter(filterName) {
        cy.get(this.filterMenuTrigger).first().click();
        cy.screenshot('ss_filter_publish_dropdown_opened');
        cy.wait(1000);

        cy.get(this.filterOption).contains(filterName).click();
        cy.wait(5000);
        cy.screenshot('ss_filter_publish_filter_applied');
    }
}

module.exports = new PostFilterPageObject();
