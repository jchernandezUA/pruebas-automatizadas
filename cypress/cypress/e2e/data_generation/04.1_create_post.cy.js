const LoginPageObject = require("../../support/LoginPageObject");
const PostCreationAndPublishPageObject = require("../../support/PostCreationAndPublishPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    let postData = {};

    before(() => {
        // Realizar el inicio de sesión una vez
        LoginPageObject.signIn();

        // Cargar los datos desde el archivo JSON una vez
        cy.fixture('../fixtures/datamokaroo.json').then((data) => {
            postData = data[0]; // Cargar solo el primer post del JSON
        });
    });

    it('should navigate to the editor and publish a post', function() {
        cy.log('Creating post');
        PostCreationAndPublishPageObject.navigateToEditor();            
        cy.wait(1000); 

        // Verificar que el editor se ha cargado completamente antes de interactuar
        // cy.get(PostCreationAndPublishPageObject.titleInput, { timeout: 20000 }).should('be.visible');
        
        PostCreationAndPublishPageObject.enterPostDetails(postData.postTitle, postData.postDescription);
        PostCreationAndPublishPageObject.publishPost();
        cy.screenshot('ss_create_post', {
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
