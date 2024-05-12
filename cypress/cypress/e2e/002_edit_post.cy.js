const LoginPageObject = require("../support/LoginPageObject");
const PostEditorPageObject = require("../support/PostEditorPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    it('should create and edit a post', () => {
        const title = 'Nuevo post de prueba';
        const updatedTitle = 'Actualizar post';
        const content = 'Este contenido ha sido creado para una prueba.';
        const updatedContent = 'Contenido actualizado para prueba.';

        LoginPageObject.signIn();
        PostEditorPageObject.navigateToEditor();
        PostEditorPageObject.enterPostDetails(title, content);
        PostEditorPageObject.publishPost();
        
        PostEditorPageObject.navigateToPosts();
        PostEditorPageObject.selectPost(title);
        PostEditorPageObject.editPost(updatedTitle, updatedContent);
        PostEditorPageObject.verifyPostUpdate(updatedTitle, updatedContent);
    });
});
