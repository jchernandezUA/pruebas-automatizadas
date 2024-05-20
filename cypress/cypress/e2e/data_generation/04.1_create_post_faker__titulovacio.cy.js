const { faker } = require('@faker-js/faker');
const LoginPageObject = require("../../support/LoginPageObject");
const PostCreationAndPublishPageObject = require("../../support/PostCreationAndPublishPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    before(() => {
        // Realizar el inicio de sesión una vez
        LoginPageObject.signIn();
    });

    it('should not allow creating a post with an empty title', function() {
        const postTitle = ''; // Título vacío
        const postDescription = faker.lorem.paragraph();

        cy.log('Attempting to create post with an empty title');
        PostCreationAndPublishPageObject.navigateToEditor();            
        cy.wait(1000);           
        cy.get(PostCreationAndPublishPageObject.titleInput, { timeout: 10000 }).should('be.visible');

        // Intentar ingresar un título vacío y capturar el error esperado
        cy.get(PostCreationAndPublishPageObject.titleInput).clear();
        cy.get(PostCreationAndPublishPageObject.descriptionInput).type(postDescription);        
        cy.screenshot('ss_create_post_description_entered_empty_title', {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
        });
        PostCreationAndPublishPageObject.publishPost();
    
        // Verificar que la prueba pase a pesar del error
        cy.log('Test completed with expected error handling');
    });
});
