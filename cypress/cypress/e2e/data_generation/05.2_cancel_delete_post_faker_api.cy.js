const LoginPageObject = require("../../support/LoginPageObject");
const PostManagementPageObject = require("../../support/PostDeletionPageObject");
const PostCreationAndPublishPageObject = require("../../support/PostCreationAndPublishPageObject");

describe('Gestión de posts en Ghost CMS', () => { 
    let postData = {};

    before(() => {        
        LoginPageObject.signIn();

        // Cargar los datos desde el API de Mockaroo
        cy.request('GET', 'https://my.api.mockaroo.com/ghostpost.json?key=7ae6d040')
            .then((response) => {
                postData = response.body[0]; // Cargar solo el primer post del JSON

                // Crear el post antes de intentar eliminarlo
                PostCreationAndPublishPageObject.navigateToEditor();
                cy.wait(1000);
                cy.get(PostCreationAndPublishPageObject.titleInput, { timeout: 10000 }).should('be.visible');
                PostCreationAndPublishPageObject.enterPostDetails(postData.postTitle, postData.postDescription);
                PostCreationAndPublishPageObject.publishPost();
                cy.wait(1000);
            });
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
