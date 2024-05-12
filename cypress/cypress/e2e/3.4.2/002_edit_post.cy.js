const LoginPageObject = require("./pageObjects/LoginPageObject");
const PostEditorPageObject = require("./pageObjects/PostEditorPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    it('debería crear y editar un post', () => {
        const title = 'Nuevo post de prueba';
        const updatedTitle = 'Actualizar post';
        const content = 'Este contenido ha sido creado para una prueba.';
        const updatedContent = 'Contenido actualizado para prueba.';

        LoginPageObject.signIn();
        PostEditorPageObject.createPost(title, content);
        PostEditorPageObject.editPost(title, updatedTitle, updatedContent);
        PostEditorPageObject.verifyPostTitle(updatedTitle);
    });
});
