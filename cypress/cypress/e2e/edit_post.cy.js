const LoginPageObject = require("../support/LoginPageObject")

describe('Gestión de posts en Ghost CMS', () => {

    it('should create and edit a post', () => {
        const title = 'Nuevo post de prueba';
        const updatedTitle = 'Actualizar post';
        const content = 'Este contenido ha sido creado para una prueba.';
        const updatedContent = 'Contenido actualizado para prueba.';

        LoginPageObject.signIn()
        cy.visit('http://localhost:2368/ghost/#/editor/post');
        cy.get('.gh-editor-title').type(title);
        cy.get('.kg-prose').type(content);
        cy.screenshot('ss_edit_post_create-post-step-1'); 

      
        cy.get('.gh-publish-trigger', { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one publish button found, clicking the first one.');
            }
            $buttons.first().click();
        });
        cy.wait(5000);
        cy.screenshot('ss_edit_post_create-post-step-2'); 

      
        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.wait(5000);
        cy.contains('h3', title).click({ force: true });
        cy.screenshot('ss_edit_post_edit-post-step-1'); 
        // Edit the post
        cy.get('.gh-editor-title').clear().type(updatedTitle);
        cy.get('.kg-prose').clear().type(updatedContent);
        cy.get('.gh-publish-trigger', { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one publish button found, clicking the first one.');
            }
            $buttons.first().click();
        });
        cy.wait(5000);
        cy.screenshot('ss_edit_post_edit-post-step-2'); 

        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.contains('h3', updatedTitle).should('exist');
        cy.contains('.gh-content-entry-title', updatedTitle).click();
        cy.get('.gh-editor-title').should('have.value', updatedTitle);
        cy.get('.kg-prose').contains(updatedContent).should('exist');
    });
});
