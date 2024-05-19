const LoginPageObject = require("../../support/LoginPageObject");
const PostEditorPageObject = require("../../support/PostEditorPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    let postData = [];

    before(() => {
        // Realizar el inicio de sesión una vez
        LoginPageObject.signIn();

        // Cargar los datos desde el archivo JSON una vez
        cy.fixture('../fixtures/datamokaroo.json').then((data) => {
            postData = data;
        });
    });

    it('should create and edit multiple posts', function() {
        // Iterar sobre los datos del JSON para crear y editar cinco posts
        postData.forEach((post, index) => {
            const updatedTitle = `Actualizar post ${index + 1}`;
            const updatedContent = `Contenido actualizado para prueba ${index + 1}.`;

            cy.log(`Creating post ${index + 1} with title: ${post.postTitle}`);
            
            // Navegar al editor para crear un nuevo post
            PostEditorPageObject.navigateToEditor();

            // Esperar a que el editor se cargue completamente
            cy.wait(1000);

            // Asegurarse de que el campo de título esté visible y no esté cubierto
            cy.get(PostEditorPageObject.titleInput, { timeout: 10000 }).should('be.visible');

            PostEditorPageObject.enterPostDetails(post.postTitle, post.postDescription);
            PostEditorPageObject.publishPost();

            cy.screenshot(`ss_create_post_${index + 1}`, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
            });

            // Navegar a la lista de posts
            PostEditorPageObject.navigateToPosts();

            // Esperar a que la lista de posts se cargue completamente
            cy.wait(1000);

            // Seleccionar y editar el post
            PostEditorPageObject.selectPost(post.postTitle);
            PostEditorPageObject.editPost(updatedTitle, updatedContent);

            cy.screenshot(`ss_edit_post_${index + 1}`, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
            });

            // Verificar que el post se ha actualizado correctamente
            PostEditorPageObject.verifyPostUpdate(updatedTitle, updatedContent);

            // Esperar antes de pasar al siguiente post
            cy.wait(1000);

            // Redirigir de nuevo a la lista de posts para eliminar otro post
            cy.visit(PostEditorPageObject.postsUrl);
            cy.wait(1000); // Aumentar el tiempo de espera para asegurar que la redirección se complete
            cy.reload(); // Recargar la página para asegurarse de que todo el estado anterior se ha limpiado
            cy.url().should('include', PostEditorPageObject.postsUrl); // Verificar que la redirección a la lista de posts se haya completado
        });
    });
});
