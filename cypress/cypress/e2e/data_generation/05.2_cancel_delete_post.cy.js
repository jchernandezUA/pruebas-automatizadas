const LoginPageObject = require("../../support/LoginPageObject");
const PostManagementPageObject = require("../../support/PostDeletionPageObject");

describe('Gestión de posts en Ghost CMS', () => { 
    let postData = {};

    before(() => {        
        LoginPageObject.signIn();        
        cy.fixture('../fixtures/datamokaroo.json').then((data) => {
            postData = data[0]; // Cargar solo el primer post del JSON
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
