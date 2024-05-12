const LoginPageObject = require("../../support/LoginPageObject");
const PostCreationAndPublishPageObject = require("../../support/PostCreationAndPublishPageObject");

describe('Gestión de posts en Ghost CMS', () => { 
    describe('Publish Post', () => {
        it('should navigate to the editor and publish a post', () => {
            LoginPageObject.signIn();
            cy.screenshot("ss_create_post_navigate_login");
            
            PostCreationAndPublishPageObject.navigateToEditor();
            PostCreationAndPublishPageObject.enterPostDetails('New Post Title', 'Post description here');
            PostCreationAndPublishPageObject.publishPost();
        });
    });
});
