const LoginPageObject = require("./pageObjects/LoginPageObject");
const PostFilterPageObject = require("./pageObjects/PostFilterPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    it('should filter and display only scheduled posts', () => {
        LoginPageObject.signIn();
        PostFilterPageObject.navigateToPosts();
        PostFilterPageObject.applyFilter('Scheduled posts');
    });
});
