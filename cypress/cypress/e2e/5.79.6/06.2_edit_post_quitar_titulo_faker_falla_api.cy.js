const LoginPageObject = require("../../support/LoginPageObject");
const PostEditorPageObject = require("../../support/PostEditorPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    let postData = {};

    before(() => {        
        LoginPageObject.signIn();

        // Cargar los datos desde el API de Mockaroo
        cy.request('GET', 'https://my.api.mockaroo.com/ghostpost.json?key=7ae6d040')
            .then((response) => {
                postData = response.body[0]; // Cargar solo el primer post del JSON
            });
    });

    it('should create and edit a post', function() {
        const updatedTitle = ''; 
        const updatedContent = postData.postDescription; 
        cy.log(`Creating post with title: ${postData.postTitle}`);
        
        // Crear el post
        PostEditorPageObject.navigateToEditor();
        cy.wait(1000);

        cy.get(PostEditorPageObject.titleInput, { timeout: 10000 }).should('be.visible');
        PostEditorPageObject.enterPostDetails(postData.postTitle, postData.postDescription);
        PostEditorPageObject.publishPost();

        cy.screenshot('ss_create_post', {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
        });

        // Navegar a la lista de posts
        PostEditorPageObject.navigateToPosts();
        cy.wait(1000);

        // Seleccionar y editar el post
        PostEditorPageObject.selectPost(postData.postTitle);

        // Limpiar el título y actualizar la descripción
        cy.get(PostEditorPageObject.titleInput).clear();
        cy.get(PostEditorPageObject.contentInput).clear().type(updatedContent);

        cy.screenshot('ss_edit_post', {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
        });

        // Guardar el post editado
        PostEditorPageObject.publishPost();

        // Verificar que el post se ha actualizado correctamente
        if (updatedTitle) {
            PostEditorPageObject.navigateToPosts();
            cy.contains('h3', updatedTitle).should('exist');
            cy.contains('.gh-content-entry-title', updatedTitle).click();
            cy.get(PostEditorPageObject.titleInput).should('have.value', updatedTitle);
        } 
    });
});
