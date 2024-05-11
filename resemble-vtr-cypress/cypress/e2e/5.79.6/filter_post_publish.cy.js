const LoginPageObject = require("../../support/LoginPageObject")

describe('Gestión de posts en Ghost CMS', () => {
    
    it('Filtrar un post', () => {
        LoginPageObject.signIn()
        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.wait(4000); 
        cy.screenshot('ss_filter_publish_posts_page_loaded'); 

        // Open the filter dropdown to select 'Published posts'
        cy.get('.gh-contentfilter-menu .ember-basic-dropdown-trigger').first().click();
        cy.screenshot('ss_filter_publish_dropdown_opened'); 
        cy.wait(1000); 

        
        cy.get('.ember-power-select-option').contains('Published posts').click();
        cy.wait(5000); 
        cy.screenshot('ss_filter_publish_filter_applied'); 

      
    });
});
