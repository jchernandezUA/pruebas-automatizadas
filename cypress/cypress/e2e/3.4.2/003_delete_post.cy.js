const LoginPageObject = require("./pageObjects/LoginPageObject");
const PostManagerPageObject = require("./pageObjects/PostPageDeleteObject");

describe('Gestión de posts en Ghost CMS', () => {  
    it('debería crear y eliminar un post', () => {
        const title = 'Nuevo post';
        const content = 'Este contenido es de prueba';

        LoginPageObject.signIn();
        PostManagerPageObject.createPost(title, content);
        PostManagerPageObject.deletePost(title);
    });
});
