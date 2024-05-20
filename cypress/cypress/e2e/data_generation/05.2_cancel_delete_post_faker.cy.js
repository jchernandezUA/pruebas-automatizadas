const { faker } = require('@faker-js/faker');
const LoginPageObject = require("../../support/LoginPageObject");
const PostManagementPageObject = require("../../support/PostDeletionPageObject");
const PostCreationAndPublishPageObject = require("../../support/PostCreationAndPublishPageObject");

describe('Gestión de posts en Ghost CMS', () => { 
    let postData = {};

    before(() => {        
        LoginPageObject.signIn();

        // Generar datos de prueba usando Faker.js
        postData = {
            postTitle: faker.lorem.sentence(),
            postDescription: faker.lorem.paragraph()
        };

        // Crear el post antes de intentar eliminarlo
        PostCreationAndPublishPageObject.navigateToEditor();
        cy.wait(1000);
        cy.get(PostCreationAndPublishPageObject.titleInput, { timeout: 10000 }).should('be.visible');
        PostCreationAndPublishPageObject.enterPostDetails(postData.postTitle, postData.postDescription);
        PostCreationAndPublishPageObject.publishPost();
        cy.wait(1000);
    });

    it('should cancel deletion of a post', function() {        
        cy.log(`Cancelling deletion of post with title: ${postData.postTitle}`);            
        PostManagementPageObject.navigateToPosts();
        cy.wait(1000);
        PostManagementPageObject.selectAndDeletePost(postData.postTitle);

        PostManagementPageObject.cancelDelete();

        cy.screenshot('ss_cancel_delete_post', {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
        });           
        cy.wait(1000);           
        cy.visit(PostManagementPageObject.postsUrl);
        cy.wait(1000); 
        cy.reload(); 
        cy.url().should('include', PostManagementPageObject.postsUrl); 
    });
});
