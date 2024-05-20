const { faker } = require('@faker-js/faker');
const LoginPageObject = require("../../support/LoginPageObject");
const PostCreationAndPublishPageObject = require("../../support/PostCreationAndPublishPageObject");
const PostManagementPageObject = require("../../support/PostDeletionPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    let postData = {};

    before(() => {
        // Realizar el inicio de sesión una vez
        LoginPageObject.signIn();

        // Generar un título y descripción de post aleatorios usando Faker
        postData = {
            postTitle: faker.lorem.sentence(),
            postDescription: faker.lorem.paragraph()
        };
    });

    it('should create and delete a post', function() {
        // Crear el post
        cy.log(`Creating post with title: ${postData.postTitle}`);
        PostCreationAndPublishPageObject.navigateToEditor();
        cy.wait(1000);
        cy.get(PostCreationAndPublishPageObject.titleInput, { timeout: 10000 }).should('be.visible');
        PostCreationAndPublishPageObject.enterPostDetails(postData.postTitle, postData.postDescription);
        PostCreationAndPublishPageObject.publishPost();
        cy.screenshot('ss_create_post', {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
        });
        cy.wait(1000);
        cy.visit(PostCreationAndPublishPageObject.editorUrl);
        cy.wait(1000);
        cy.reload();
        cy.url().should('include', PostCreationAndPublishPageObject.editorUrl);

        // Eliminar el post
        cy.log(`Deleting post with title: ${postData.postTitle}`);
        PostManagementPageObject.navigateToPosts();
        cy.wait(1000);
        PostManagementPageObject.selectAndDeletePost(postData.postTitle);
        
        // Hacer clic en "Cancelar" en lugar de confirmar la eliminación
        cy.get(PostManagementPageObject.cancelDeleteButton).contains('Cancel').click();
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
