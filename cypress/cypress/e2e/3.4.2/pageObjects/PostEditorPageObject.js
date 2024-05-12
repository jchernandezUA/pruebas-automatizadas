// pageObjects/PostEditorPageObject.js

class PostEditorPageObject {
    constructor() {
        this.titleInput = '.gh-editor-title';
        this.contentInput = '.koenig-editor__editor-wrapper';
        this.publishMenuTrigger = '.gh-publishmenu-trigger';
        this.publishButton = '.gh-btn-blue';
        this.postsScreenUrl = 'http://localhost:2370/ghost/#/posts';
    }

    createPost(title, content) {
        cy.visit('http://localhost:2370/ghost/#/editor/post');
        cy.get(this.titleInput).type(title);
        cy.get(this.contentInput).type(content);
        cy.screenshot('ss_edit_post_create-post-step-1');
        this.publishPost();
        cy.screenshot('ss_edit_post_create-post-step-2');
    }

    editPost(originalTitle, updatedTitle, updatedContent) {
        cy.visit(this.postsScreenUrl);
        cy.wait(1000);
        cy.contains('h3', originalTitle).click({ force: true });
        cy.screenshot('ss_edit_post_edit-post-step-1');
        cy.get(this.titleInput).clear().type(updatedTitle);
        cy.get(this.contentInput).clear().type(updatedContent);
        this.publishPost();
        cy.screenshot('ss_edit_post_edit-post-step-2');
    }

    publishPost() {
        cy.get(this.publishMenuTrigger, { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one publish button found, clicking the first one.');
            }
            $buttons.first().click();
        });

        cy.get(this.publishButton, { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one publish button found, clicking the first one.');
                cy.screenshot("ss_create_post_multiple_publish_buttons"); 
            }
            $buttons.first().click();
            cy.screenshot("ss_create_post_publish_clicked"); 
        });
        cy.wait(1000);
    }

    verifyPostTitle(updatedTitle) {
        cy.visit(this.postsScreenUrl);
        cy.contains('h3', updatedTitle).should('exist');
        cy.contains('.gh-content-entry-title', updatedTitle).click();
        cy.get(this.titleInput).should('have.value', updatedTitle);
    }
}

module.exports = new PostEditorPageObject();
