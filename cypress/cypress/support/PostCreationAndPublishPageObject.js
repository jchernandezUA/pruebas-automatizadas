// pageObjects/PostCreationAndPublishPageObject.js

class PostCreationAndPublishPageObject {
    constructor() {
        this.editorUrl = '/ghost/#/editor/post';
        this.titleInput = '.gh-editor-title';
        this.descriptionInput = '.kg-prose';
        this.publishTrigger = '.gh-publish-trigger';
    }

    navigateToEditor() {
        cy.visit(this.editorUrl);
        cy.screenshot("ss_create_post_navigate_editor");
    }

    enterPostDetails(title, description) {
        cy.get(this.titleInput).type(title);
        cy.screenshot("ss_title_entered");
        cy.get(this.descriptionInput).type(description);
        cy.screenshot("ss_create_post_description_entered");
    }

    publishPost() {
        cy.get(this.publishTrigger, { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one publish button found, clicking the first one.');
                cy.screenshot("ss_create_post_multiple_publish_buttons"); 
            }
            $buttons.first().click();
            cy.screenshot("ss_create_post_publish_clicked"); 
        });

        cy.wait(500); 
        cy.screenshot("ss_create_post_post_published");
    }
}

module.exports = new PostCreationAndPublishPageObject();
