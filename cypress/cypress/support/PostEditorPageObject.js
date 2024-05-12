// pageObjects/PostEditorPageObject.js

class PostEditorPageObject {
    constructor() {
        this.editorUrl = '/ghost/#/editor/post';
        this.postsUrl = '/ghost/#/posts';
        this.titleInput = '.gh-editor-title';
        this.contentInput = '.kg-prose';
        this.publishTrigger = '.gh-publish-trigger';
    }

    navigateToEditor() {
        cy.visit(this.editorUrl);
        cy.screenshot('ss_edit_post_navigate_to_editor');
    }

    enterPostDetails(title, content) {
        cy.get(this.titleInput).type(title);
        cy.get(this.contentInput).type(content);
        cy.screenshot('ss_edit_post_create-post-step-1');
    }

    publishPost() {
        cy.get(this.publishTrigger, { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one publish button found, clicking the first one.');
            }
            $buttons.first().click();
        });
        cy.wait(5000); // Adjust timeout based on your app's response time
        cy.screenshot('ss_edit_post_create-post-step-2');
    }

    navigateToPosts() {
        cy.visit(this.postsUrl);
        cy.wait(5000); // Adjust timeout based on your app's response time
    }

    selectPost(title) {
        cy.contains('h3', title).click({ force: true });
        cy.screenshot('ss_edit_post_select_post');
    }

    editPost(updatedTitle, updatedContent) {
        cy.get(this.titleInput).clear().type(updatedTitle);
        cy.get(this.contentInput).clear().type(updatedContent);
        cy.screenshot('ss_edit_post_edit-post-step-1');
        this.publishPost(); // Reuse the publish method
        cy.screenshot('ss_edit_post_edit-post-step-2');
    }

    verifyPostUpdate(updatedTitle, updatedContent) {
        this.navigateToPosts();
        cy.contains('h3', updatedTitle).should('exist');
        cy.contains('.gh-content-entry-title', updatedTitle).click();
        cy.get(this.titleInput).should('have.value', updatedTitle);
        cy.get(this.contentInput).contains(updatedContent).should('exist');
    }
}

module.exports = new PostEditorPageObject();
