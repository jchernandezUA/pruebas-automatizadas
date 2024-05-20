const LoginPageObject = require("../../support/LoginPageObject");
const PostCreationAndPublishPageObject = require("../../support/PostCreationAndPublishPageObject");

describe('Gestión de posts en Ghost CMS', () => { 
    let postData = {};

    before(() => {
        // Realizar el inicio de sesión una vez
        LoginPageObject.signIn();

        // Cargar los datos desde el API de Mockaroo
        cy.request('GET', 'https://my.api.mockaroo.com/ghostpost.json?key=7ae6d040')
            .then((response) => {
                postData = response.body[0]; // Cargar solo el primer post del JSON
            });
    });

    it('should navigate to the editor, publish and preview a post', function() {
        cy.log(`Creating post with title: ${postData.postTitle}`);

        // Navegar al editor para crear un nuevo post
        PostCreationAndPublishPageObject.navigateToEditor();

        cy.get(PostCreationAndPublishPageObject.titleInput, { timeout: 10000 }).should('be.visible');

        PostCreationAndPublishPageObject.enterPostDetails(postData.postTitle, postData.postDescription);
        PostCreationAndPublishPageObject.previewPost();
        PostCreationAndPublishPageObject.viewMobile();

        cy.wait(1000);

        cy.screenshot('ss_create_post', {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
        });
    });
});
