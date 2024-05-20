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

    it('should attempt to create a post with a long title', function() {
        const postTitle = postData.postTitle + ' '.repeat(1000 - postData.postTitle.length); // Agregar espacios para alcanzar 1000 caracteres
        const postDescription = postData.postDescription;

        cy.log('Creating post with a long title');
        PostCreationAndPublishPageObject.navigateToEditor();            
        cy.wait(1000);           
        cy.get(PostCreationAndPublishPageObject.titleInput, { timeout: 10000 }).should('be.visible');
        PostCreationAndPublishPageObject.enterPostDetails(postTitle, postDescription);

        // Tomar una captura de pantalla
        cy.screenshot('ss_create_post_long_title', {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
        });

        // Omitir la publicación del post
        cy.log('Skipping post publication due to long title');
    });
});
