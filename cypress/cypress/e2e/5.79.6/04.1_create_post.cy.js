const LoginPageObject = require("../../support/LoginPageObject");
const PostCreationAndPublishPageObject = require("../../support/PostCreationAndPublishPageObject");

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

    it('should create multiple posts', function() {
        // Iterar sobre los datos del JSON para crear cinco posts
        postData.forEach((post, index) => {
            cy.log(`Creating post ${index + 1}`);
            PostCreationAndPublishPageObject.navigateToEditor();            
            cy.wait(1000);           
            cy.get(PostCreationAndPublishPageObject.titleInput, { timeout: 10000 }).should('be.visible');
            PostCreationAndPublishPageObject.enterPostDetails(post.postTitle, post.postDescription);
            PostCreationAndPublishPageObject.publishPost();
            cy.screenshot(`ss_create_post_${index + 1}`, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
            });           
            cy.wait(1000);           
            cy.visit(PostCreationAndPublishPageObject.editorUrl);
            cy.wait(1000); 
            cy.reload(); 
            cy.url().should('include', PostCreationAndPublishPageObject.editorUrl); 
        });
    });
});
