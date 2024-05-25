// pageObjects/PostFilterPageObject.js
const Utils = require('./Utils')

class PostFilterPageObject {
    constructor() {
        this.postsUrl = '/ghost/#/posts';
        this.filterMenuTrigger = '.gh-contentfilter-menu .ember-basic-dropdown-trigger';
        this.filterOption = '.ember-power-select-option';
    }

    navigateToPosts() {
        cy.visit(this.postsUrl);
        cy.wait(4000); // Asegúrate de que la página de posts esté completamente cargada       
        Utils.screenshot('ss_filter_posts_page_loaded' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
          });
    }

    applyFilter(filterName) {
        this.openFilterDropdown();
        this.selectFilterOption(filterName);
    }

    openFilterDropdown() {
        cy.get(this.filterMenuTrigger).first().click();      
        Utils.screenshot('ss_filter_dropdown_opened' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
          });
        cy.wait(1000); // Espera para que el desplegable se abra completamente
    }

    selectFilterOption(filterName) {
        cy.get(this.filterOption).contains(filterName).click();
        cy.wait(5000); // Espera para que el filtro se aplique
        Utils.screenshot('ss_filter_' + filterName.toLowerCase().replace(/ /g, '_') + '_applied');
    }

    filterPublishedPosts() {
        this.applyFilter('Published posts');
    }
}

module.exports = new PostFilterPageObject();
