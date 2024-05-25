const LoginPageObject = require("../../support/LoginPageObject");
const PostCreationAndPublishPageObject = require("../../support/PostCreationAndPublishPageObject");
const Utils = require('../../support/Utils')

describe('Gestión de posts en Ghost CMS', () => { 
    describe('Publish Post', () => {
        let number = 1; 
        it('should navigate to the editor and publish a post', () => {
            LoginPageObject.signIn();           
            Utils.screenshot('ss_create_post_navigate_login' + number, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
              });
            
            PostCreationAndPublishPageObject.navigateToEditor();
            PostCreationAndPublishPageObject.enterPostDetails('New Post Title', 'Post description here');
            PostCreationAndPublishPageObject.publishPost();
        });
    });
});
