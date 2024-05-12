const LoginPageObject = require("../../support/LoginPageObject");
const PostFilterPageObject = require("../../support/PostFilterPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    
    it('Filtrar posts publicados', () => {
        LoginPageObject.signIn();
        PostFilterPageObject.navigateToPosts();
        PostFilterPageObject.filterPublishedPosts(); // Usando el método específico para filtrar posts publicados
    });
});
