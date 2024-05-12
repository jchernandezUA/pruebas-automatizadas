const LoginPageObject = require("../support/LoginPageObject");
const ScheduledPostFilterPageObject = require("../support/ScheduledPostFilterPageObject");

describe('Gestión de posts en Ghost CMS', () => {
    it('should filter and display only scheduled posts', () => {
        LoginPageObject.signIn();
        ScheduledPostFilterPageObject.navigateToPosts();
        ScheduledPostFilterPageObject.applyScheduledPostsFilter();
    });
});
