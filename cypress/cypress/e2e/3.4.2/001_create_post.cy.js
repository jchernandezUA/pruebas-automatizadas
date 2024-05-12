const LoginPageObject = require("./pageObjects/LoginPageObject");
const PostPageObject = require("./pageObjects/PostPageObject");

describe('Gestión de posts en Ghost CMS', () => { 

    describe('Publicar Post', () => {

        let number = 1;
        it('debería navegar al editor y publicar un post', () => {
            LoginPageObject.signIn();          
            cy.screenshot('ss_create_post_navigate_login' + number, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
              });
            
            PostPageObject.navigateToEditor();
            PostPageObject.enterPostDetails('New Post Title', 'Post description here');
            PostPageObject.publishPost();
        });
    });
});
