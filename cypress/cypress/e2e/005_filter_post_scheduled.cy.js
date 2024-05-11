const LoginPageObject = require("../support/LoginPageObject")

describe('Gestión de posts en Ghost CMS', () => {
 
    it('should filter and display only scheduled posts', () => {
        LoginPageObject.signIn()
        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.wait(4000); 
        cy.screenshot('ss_filter_scheduled_posts_page_loaded'); 

       
        cy.get('.gh-contentfilter-menu .ember-basic-dropdown-trigger').first().click();
        cy.screenshot('ss_filter_scheduled_dropdown_opened'); 
        cy.wait(1000); 

      
        cy.get('.ember-power-select-option').contains('Scheduled posts').click();
        cy.wait(5000); 
        cy.screenshot('ss_filter_scheduled_filter_applied'); 

      
    });
});
