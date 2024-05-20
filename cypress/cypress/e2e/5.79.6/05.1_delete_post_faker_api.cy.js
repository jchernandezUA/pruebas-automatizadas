const LoginPageObject = require("../../support/LoginPageObject");
const PostCreationAndPublishPageObject = require("../../support/PostCreationAndPublishPageObject");
const PostManagementPageObject = require("../../support/PostDeletionPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    let postData = {};

    before(() => {
        // Realizar el inicio de sesión una vez
        LoginPageObject.signIn();

        // Cargar los datos desde el API de Mockaroo
        cy.request('GET', 'https://my.api.mockaroo.com/ghostpost.json?key=7ae6d040')
            .then((response) => {
                postData = response.body[0]; // Cargar solo el primer post del API
            });
    });

    it('should create and delete a post', function() {
        cy.log(`Creating post with title: ${postData.postTitle}`);
        
        // Crear el post
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

        cy.log(`Deleting post with title: ${postData.postTitle}`);
        
        // Eliminar el post
        PostManagementPageObject.navigateToPosts();
        cy.wait(1000);
        PostManagementPageObject.selectAndDeletePost(postData.postTitle);
       
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
