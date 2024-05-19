const { faker } = require('@faker-js/faker');
const LoginPageObject = require("../../support/LoginPageObject");
const PostCreationAndPublishPageObject = require("../../support/PostCreationAndPublishPageObject");
const PostManagementPageObject = require("../../support/PostDeletionPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    let postData = [];

    before(() => {
        // Realizar el inicio de sesión una vez
        LoginPageObject.signIn();

        // Generar cinco títulos de posts aleatorios usando Faker
        for (let i = 0; i < 5; i++) {
            postData.push({
                postTitle: faker.lorem.sentence(),
                postDescription: faker.lorem.paragraph()
            });
        }
    });

    it('should create and delete multiple posts', function() {
        // Crear los posts
        postData.forEach((post, index) => {
            cy.log(`Creating post ${index + 1} with title: ${post.postTitle}`);
            PostCreationAndPublishPageObject.navigateToEditor();
            cy.wait(1000);
            cy.get(PostCreationAndPublishPageObject.titleInput, { timeout: 10000 }).should('be.visible');
            PostCreationAndPublishPageObject.enterPostDetails(post.postTitle, post.postDescription);
            PostCreationAndPublishPageObject.publishPost();
            cy.screenshot(`ss_create_post_${index + 1}`, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
            });
            cy.wait(1000);
            cy.visit(PostCreationAndPublishPageObject.editorUrl);
            cy.wait(1000);
            cy.reload();
            cy.url().should('include', PostCreationAndPublishPageObject.editorUrl);
        });

        // Eliminar los posts
        postData.forEach((post, index) => {
            cy.log(`Deleting post ${index + 1} with title: ${post.postTitle}`);
            PostManagementPageObject.navigateToPosts();
            cy.wait(1000);
            PostManagementPageObject.selectAndDeletePost(post.postTitle);
         
            cy.get(PostManagementPageObject.cancelDeleteButton).contains('Cancel').click();
            cy.screenshot(`ss_cancel_delete_post_${index + 1}`, {
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
});
