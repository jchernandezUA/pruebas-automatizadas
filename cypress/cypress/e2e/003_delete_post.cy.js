const LoginPageObject = require("../support/LoginPageObject")

describe('Gestión de posts en Ghost CMS', () => {  

    it('should create and delete a post', () => {
        const title = 'Nuevo post';
        const content = 'Este contenido es de prueba';

        LoginPageObject.signIn()
        cy.visit('http://localhost:2368/ghost/#/editor/post');
        cy.get('.gh-editor-title').type(title);
        cy.get('.kg-prose').type(content);
        cy.screenshot('ss_delete_post_create-post-step-1'); 

       
        cy.get('.gh-publish-trigger', { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one publish button found, clicking the first one.');
            }
            $buttons.first().click();
        });
        cy.wait(5000); 
        cy.screenshot('ss_delete_post_create-post-step-2'); 

       
        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.wait(5000);
        cy.contains('h3', title).click({ force: true });
        cy.screenshot('ss_delete_post_delete-post-step-1'); 

      
        cy.get('.settings-menu-toggle').click();
        cy.get('.settings-menu-delete-button').click();
        cy.get('.gh-btn-red').click();
        cy.screenshot('ss_delete_post_delete-post-step-2');
    });
});
