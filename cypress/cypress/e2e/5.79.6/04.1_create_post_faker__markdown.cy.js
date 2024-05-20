const { faker } = require('@faker-js/faker');
const LoginPageObject = require("../../support/LoginPageObject");
const PostCreationAndPublishPageObject = require("../../support/PostCreationAndPublishPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    before(() => {
        // Realizar el inicio de sesión una vez
        LoginPageObject.signIn();
    });

    it('should create a post with Markdown in the title and description', function() {
        const postTitle = faker.lorem.words(5) + ` **${faker.lorem.word()}** *${faker.lorem.word()}*`;
        const postDescription = `# ${faker.lorem.sentence()}\n\n**${faker.lorem.paragraph()}**`;

        cy.log('Creating post with Markdown in the title and description');
        PostCreationAndPublishPageObject.navigateToEditor();            
        cy.wait(1000);           
        cy.get(PostCreationAndPublishPageObject.titleInput, { timeout: 10000 }).should('be.visible');

        // Ingresar título y descripción en formato Markdown
        cy.get(PostCreationAndPublishPageObject.titleInput).clear().type(postTitle);
        cy.get(PostCreationAndPublishPageObject.descriptionInput).type(postDescription);        
        cy.screenshot('ss_create_post_description_entered_markdown', {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
        });

        PostCreationAndPublishPageObject.publishPost();

        // Verificar que la prueba pase correctamente
        cy.log('Post created with Markdown in the title and description');
    });
});
