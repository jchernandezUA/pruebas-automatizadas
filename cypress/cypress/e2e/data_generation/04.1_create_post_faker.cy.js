const { faker } = require('@faker-js/faker');
const LoginPageObject = require("../../support/LoginPageObject");
const PostCreationAndPublishPageObject = require("../../support/PostCreationAndPublishPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    before(() => {
        // Realizar el inicio de sesión una vez
        LoginPageObject.signIn();
    });

    it('should create multiple posts', function() {
        // Generar y crear cinco posts usando Faker
        for (let i = 1; i <= 5; i++) {
            const postTitle = faker.lorem.sentence();
            const postDescription = faker.lorem.paragraph();

            cy.log(`Creating post ${i}`);
            PostCreationAndPublishPageObject.navigateToEditor();            
            cy.wait(1000);           
            cy.get(PostCreationAndPublishPageObject.titleInput, { timeout: 10000 }).should('be.visible');
            PostCreationAndPublishPageObject.enterPostDetails(postTitle, postDescription);
            PostCreationAndPublishPageObject.publishPost();

            cy.screenshot(`ss_create_post_${i}`, {
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
