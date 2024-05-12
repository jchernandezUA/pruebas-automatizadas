const LoginPageObject = require("./pageObjects/LoginPageObject");
const PostPageObject = require("./pageObjects/PostPageObject");

describe('Gestión de posts en Ghost CMS', () => { 

    describe('Publicar Post', () => {
        it('debería navegar al editor y publicar un post', () => {
            LoginPageObject.signIn();
            cy.screenshot("ss_create_post_navigate_login");
            
            PostPageObject.navigateToEditor();
            PostPageObject.enterPostDetails('New Post Title', 'Post description here');
            PostPageObject.publishPost();
        });
    });
});
