const Utils = require('./Utils')


class PostCreationAndPublishPageObject {
    constructor() {
        this.editorUrl = '/ghost/#/editor/post';
        this.titleInput = '.gh-editor-title';
        this.descriptionInput = '.kg-prose';
        this.publishTrigger = '.gh-publish-trigger';
        this.number = 1;
        this.previewPostButton = '.gh-editor-preview-trigger';
        this.previewModeButton = '.gh-contentfilter .gh-post-preview-mode';
    }

    navigateToEditor() {
        cy.visit(this.editorUrl);     
        Utils.screenshot('ss_create_post_navigate_editor' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
        });
        cy.wait(500);   
    }

    enterPostDetails(title, description) {        
        cy.get(this.titleInput, { timeout: 10000 }).should('be.visible').type(title);
        cy.get(this.descriptionInput).type(description);        
        Utils.screenshot('ss_create_post_description_entered' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
        });
    }

    publishPost() {
        cy.get(this.publishTrigger, { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one publish button found, clicking the first one.');           
                Utils.screenshot('ss_create_post_multiple_publish_buttons' + this.number, {
                    capture: 'viewport',
                    clip: { x: 0, y: 0, width: 1000, height: 660 }
                });
            }
            $buttons.first().click();           
            Utils.screenshot('ss_create_post_publish_clicked' + this.number, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
            }); 
        });

        cy.wait(500);       
        Utils.screenshot('ss_create_post_post_published' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
        });
    }

    previewPost() {
        cy.get(this.previewPostButton, { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one preview button found, clicking the first one.');           
                Utils.screenshot('ss_create_post_multiple_preview_buttons' + this.number, {
                    capture: 'viewport',
                    clip: { x: 0, y: 0, width: 1000, height: 660 }
                });
            }
            $buttons.first().click();           
            Utils.screenshot('ss_create_post_preview_clicked' + this.number, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
            }); 
        });

        cy.wait(500);       
    }

    viewDesk() {
        cy.get(this.previewModeButton, { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one preview mode button found, clicking the first one.');
                Utils.screenshot('ss_create_post_multiple_preview_mode_buttons' + this.number, {
                    capture: 'viewport',
                    clip: { x: 0, y: 0, width: 1000, height: 660 }
                });
            }
            $buttons.eq().click();
            Utils.screenshot('ss_create_post_preview_mode_clicked' + this.number, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
            });
        });

        cy.wait(500);
    }

    viewMobile() {
        cy.get(this.previewModeButton, { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one preview mode button found, clicking the first one.');
                Utils.screenshot('ss_create_post_multiple_preview_mode_buttons' + this.number, {
                    capture: 'viewport',
                    clip: { x: 0, y: 0, width: 1000, height: 660 }
                });
            }
            $buttons.eq(1).click();
            Utils.screenshot('ss_create_post_preview_mode_clicked' + this.number, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
            });
        });

        cy.wait(500);
    }
}

module.exports = new PostCreationAndPublishPageObject();
