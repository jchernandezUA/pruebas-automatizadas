// pageObjects/PostManagementPageObject.js

class PostManagementPageObject {
    constructor() {
        this.editorUrl = '/ghost/#/editor/post';
        this.postsUrl = '/ghost/#/posts';
        this.titleInput = '.gh-editor-title';
        this.contentInput = '.kg-prose';
        this.publishTrigger = '.gh-publish-trigger';
        this.settingsMenuToggle = '.settings-menu-toggle';
        this.deleteButton = '.settings-menu-delete-button';
        this.confirmDeleteButton = '.gh-btn-red';
    }

    navigateToEditor() {
        cy.visit(this.editorUrl);
    }

    createPost(title, content) {
        cy.get(this.titleInput).type(title);
        cy.get(this.contentInput).type(content);     
        cy.screenshot('ss_delete_post_create-post-step-1' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
          });
    }

    publishPost() {
        cy.get(this.publishTrigger, { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one publish button found, clicking the first one.');
            }
            $buttons.first().click();
        });
        cy.wait(3000);       
        cy.screenshot('ss_delete_post_create-post-step-2' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
          });
    }

    navigateToPosts() {
        cy.visit(this.postsUrl);
        cy.wait(3000);
    }

    selectAndDeletePost(title) {
        cy.contains('h3', title).click({ force: true });
        cy.screenshot('ss_delete_post_delete-post-step-1');
        cy.get(this.settingsMenuToggle).click();
        cy.get(this.deleteButton).click();
        cy.get(this.confirmDeleteButton).click();       
        cy.screenshot('ss_delete_post_delete-post-step-2' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
          });
    }
}

module.exports = new PostManagementPageObject();
