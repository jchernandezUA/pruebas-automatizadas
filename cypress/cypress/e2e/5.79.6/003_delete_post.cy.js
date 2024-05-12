const LoginPageObject = require("../../support/LoginPageObject");
const PostManagementPageObject = require("../../support/PostManagementPageObject");

describe('Gestión de posts en Ghost CMS', () => {  
    it('should create and delete a post', () => {
        const title = 'Nuevo post';
        const content = 'Este contenido es de prueba';

        LoginPageObject.signIn();
        PostManagementPageObject.navigateToEditor();
        PostManagementPageObject.createPost(title, content);
        PostManagementPageObject.publishPost();
        PostManagementPageObject.navigateToPosts();
        PostManagementPageObject.selectAndDeletePost(title);
    });
});
