const LoginPageObject = require("../../support/LoginPageObject")

describe('Gestión de posts en Ghost CMS', () => { 

    describe('Publish Post', () => {
        it('should navigate to the editor and publish a post', () => {
            LoginPageObject.signIn()
            cy.screenshot("ss_create_post_navigate_login")
            cy.visit('/ghost/#/editor/post');
            cy.screenshot("ss_create_post_navigate_editor");            

            cy.get('.gh-editor-title').type('New Post Title');
            cy.screenshot("ss_title_entered"); 

            cy.get('.kg-prose').type('Post description here');
            cy.screenshot("ss_create_post_description_entered"); 

            cy.get('.gh-publish-trigger', { timeout: 10000 }).should('be.visible').then(($buttons) => {
                if ($buttons.length > 1) {
                    cy.log('More than one publish button found, clicking the first one.');
                    cy.screenshot("ss_create_post_multiple_publish_buttons"); 
                }
                $buttons.first().click();
                cy.screenshot("ss_create_post_publish_clicked"); 
            });

            cy.wait(500); 
            cy.screenshot("ss_create_post_post_published"); 
        });
    });
});
