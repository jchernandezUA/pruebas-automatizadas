const { faker } = require('@faker-js/faker');
const LoginPageObject = require("../../support/LoginPageObject");
const PostEditorPageObject = require("../../support/PostEditorPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    let postData = [];

    before(() => {
        // Realizar el inicio de sesión una vez
        LoginPageObject.signIn();

        // Generar datos de prueba usando Faker.js
        for (let i = 0; i < 5; i++) {
            postData.push({
                postTitle: faker.lorem.sentence(),
                postDescription: faker.lorem.paragraph()
            });
        }
    });

    it('should create and edit multiple posts', function() {
       
        postData.forEach((post, index) => {
            const updatedTitle = '';
            const updatedContent = faker.lorem.paragraph(); 

            cy.log(`Creating post ${index + 1} with title: ${post.postTitle}`);
            
            
            PostEditorPageObject.navigateToEditor();

            cy.wait(1000);

           
            cy.get(PostEditorPageObject.titleInput, { timeout: 10000 }).should('be.visible');

            PostEditorPageObject.enterPostDetails(post.postTitle, post.postDescription);
            PostEditorPageObject.publishPost();

            cy.screenshot(`ss_create_post_${index + 1}`, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
            });

           
            PostEditorPageObject.navigateToPosts();

           
            cy.wait(1000);

            PostEditorPageObject.selectPost(post.postTitle);

         
            cy.get(PostEditorPageObject.titleInput).clear();
            cy.get(PostEditorPageObject.contentInput).clear().type(updatedContent);

            cy.screenshot(`ss_edit_post_${index + 1}`, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
            });

           
            PostEditorPageObject.publishPost();

           
            try {
                if (updatedTitle) {
                    PostEditorPageObject.navigateToPosts();
                    cy.contains('h3', updatedTitle).should('exist');
                    cy.contains('.gh-content-entry-title', updatedTitle).click();
                    cy.get(PostEditorPageObject.titleInput).should('have.value', updatedTitle);
                } else {
                    PostEditorPageObject.navigateToPosts();
                    cy.contains('.gh-content-entry-title', post.postDescription).click();
                    cy.get(PostEditorPageObject.titleInput).should('have.value', '');
                }
                cy.get(PostEditorPageObject.contentInput).contains(updatedContent).should('exist');
            } catch (error) {
                cy.log(`Error encountered: ${error.message}`);
                cy.screenshot(`ss_error_encountered_${index + 1}`, {
                    capture: 'viewport',
                    clip: { x: 0, y: 0, width: 1000, height: 660 }
                });
                throw error; 
            }

           
            cy.wait(1000);

           
            cy.visit(PostEditorPageObject.postsUrl);
            cy.wait(1000); 
            cy.reload(); 
            cy.url().should('include', PostEditorPageObject.postsUrl); 
        });
    });
});
