const LoginPageObject = require("../../support/LoginPageObject");
const PostManagementPageObject = require("../../support/PostDeletionPageObject");

describe('Gestión de posts en Ghost CMS', () => { 
    let postData = [];

    before(() => {        
        LoginPageObject.signIn();        
        cy.fixture('../fixtures/datamokaroo.json').then((data) => {
            postData = data;
        });
    });

    it('should delete multiple posts', function() {        
        postData.forEach((post, index) => {
            cy.log(`Deleting post ${index + 1} with title: ${post.postTitle}`);            
            PostManagementPageObject.navigateToPosts();
            cy.wait(1000);
            PostManagementPageObject.selectAndDeletePost(post.postTitle);

            cy.screenshot(`ss_delete_post_${index + 1}`, {
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
