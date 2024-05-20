class PostCreationAndPublishPageObject {
    constructor() {
        this.editorUrl = '/ghost/#/editor/post';
        this.titleInput = '.gh-editor-title';
        this.descriptionInput = '.kg-prose';
        this.publishTrigger = '.gh-publish-trigger';
        this.number = 1;
    }

    navigateToEditor() {
        cy.visit(this.editorUrl);
        cy.screenshot('ss_create_post_navigate_editor' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
        });
        cy.wait(500);
    }

    enterPostDetails(title, description) {
        cy.get(this.titleInput, { timeout: 1000 }).should('be.visible').type(title);
        cy.get(this.descriptionInput).type(description);
        cy.screenshot('ss_create_post_description_entered' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
        });
    }

    publishPost() {
        cy.get(this.publishTrigger, { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one publish button found, clicking the first one.');
                cy.screenshot('ss_create_post_multiple_publish_buttons' + this.number, {
                    capture: 'viewport',
                    clip: { x: 0, y: 0, width: 1000, height: 660 }
                });
            }
            $buttons.first().click();
            cy.screenshot('ss_create_post_publish_clicked' + this.number, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
            });
        });

        cy.wait(500);
        cy.screenshot('ss_create_post_post_published' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
        });
    }
}

module.exports = new PostCreationAndPublishPageObject();
