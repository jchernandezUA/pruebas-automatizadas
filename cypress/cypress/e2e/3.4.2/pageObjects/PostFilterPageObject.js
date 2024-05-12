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
        cy.wait(4000); // Wait to ensure the page is fully loaded       
        cy.screenshot('ss_filter_posts_page_loaded' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
          });
    }

    applyFilter(filterName) {
        cy.get(this.filterMenuTrigger).first().click();       
        cy.screenshot('ss_filter_dropdown_opened' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
          });
        cy.wait(1000);

        cy.get(this.filterOption).contains(filterName).click();
        cy.wait(5000);      
        cy.screenshot('ss_filter_applied' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
          });
    }
}

module.exports = new PostFilterPageObject();
