const { faker } = require('@faker-js/faker');
const LoginPageObject = require("../../support/LoginPageObject");
const PostCreationAndPublishPageObject = require("../../support/PostCreationAndPublishPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    before(() => {
        // Realizar el inicio de sesión una vez
        LoginPageObject.signIn();
    });

    it('should attempt to create multiple invalid posts', function() {
        // Generar y crear cinco posts usando Faker con datos que no serán aceptados
        for (let i = 1; i <= 5; i++) {
            const postTitle = faker.lorem.sentence(200) + "!@#$%"; // Título con 1000 caracteres y caracteres especiales
            const postDescription = faker.lorem.paragraph() + "<script>alert('test');</script>"; // Inyección de script para invalidar

            cy.log(`Attempting to create post ${i} with invalid data`);
            PostCreationAndPublishPageObject.navigateToEditor();            
            cy.wait(1000);           
            cy.get(PostCreationAndPublishPageObject.titleInput, { timeout: 10000 }).should('be.visible');
            PostCreationAndPublishPageObject.enterPostDetails(postTitle, postDescription);
            // no pasa por que no enceuntra la clase el cms no activa el boton publicar cuando se ponen 100 caracteres en el titulo 
            PostCreationAndPublishPageObject.publishPost();

            // Verificar que aparece un mensaje de error y que el post no se publica
            cy.contains('Error').should('be.visible');
            cy.screenshot(`ss_invalid_post_attempt_${i}`, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
            });

            cy.wait(1000);           
            cy.visit(PostCreationAndPublishPageObject.editorUrl);
            cy.wait(1000); 
            cy.reload(); 
            cy.url().should('include', PostCreationAndPublishPageObject.editorUrl); 
        }
    });
});
