// pageObjects/PostFilterPageObject.js

class PostFilterPageObject {
    constructor() {
        this.postsUrl = '/ghost/#/posts';
        this.filterMenuTrigger = '.gh-contentfilter-menu .ember-basic-dropdown-trigger';
        this.filterOption = '.ember-power-select-option';
    }

    navigateToPosts() {
        cy.visit(this.postsUrl);
        cy.wait(4000); // Asegúrate de que la página de posts esté completamente cargada
        cy.screenshot('ss_filter_posts_page_loaded');
    }

    applyFilter(filterName) {
        this.openFilterDropdown();
        this.selectFilterOption(filterName);
    }

    openFilterDropdown() {
        cy.get(this.filterMenuTrigger).first().click();
        cy.screenshot('ss_filter_dropdown_opened');
        cy.wait(1000); // Espera para que el desplegable se abra completamente
    }

    selectFilterOption(filterName) {
        cy.get(this.filterOption).contains(filterName).click();
        cy.wait(5000); // Espera para que el filtro se aplique
        cy.screenshot('ss_filter_' + filterName.toLowerCase().replace(/ /g, '_') + '_applied');
    }

    filterPublishedPosts() {
        this.applyFilter('Published posts');
    }
}

module.exports = new PostFilterPageObject();
