const LoginPageObject = require("../../support/LoginPageObject");
const PostCreationAndPublishPageObject = require("../../support/PostCreationAndPublishPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    let postData = [];

    before(() => {
        // Realizar el inicio de sesión una vez
        LoginPageObject.signIn();

        // Cargar los datos desde el API de Mockaroo
        cy.request('GET', 'https://my.api.mockaroo.com/ghostpost.json?key=7ae6d040')
            .then((response) => {
                postData = response.body;
            });
    });

    it('should create multiple posts', function() {
        // Iterar sobre los datos del API para crear los posts
        postData.forEach((post, index) => {
            const postTitle = post.postTitle;
            const postDescription = post.postDescription;

            cy.log(`Creating post ${index + 1}`);
            PostCreationAndPublishPageObject.navigateToEditor();            
            cy.wait(1000);           
            cy.get(PostCreationAndPublishPageObject.titleInput, { timeout: 10000 }).should('be.visible');
            PostCreationAndPublishPageObject.enterPostDetails(postTitle, postDescription);
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
