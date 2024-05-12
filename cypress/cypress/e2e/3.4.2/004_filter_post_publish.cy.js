const LoginPageObject = require("./pageObjects/LoginPageObject");
const PostFilterPageObject = require("./pageObjects/PostFilterPublishPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    
    it('Filtrar un post', () => {
        LoginPageObject.signIn();
        PostFilterPageObject.navigateToPosts();
        PostFilterPageObject.applyFilter('Published posts');
    });
});
