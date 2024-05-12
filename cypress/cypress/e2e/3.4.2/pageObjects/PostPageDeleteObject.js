// pageObjects/PostManagerPageObject.js
import BasePageObject from "./BasePageObject";
class PostManagerPageObject extends BasePageObject{
    constructor() {
        super();
        this.titleInput = '.gh-editor-title';
        this.contentInput = '.koenig-editor__editor-wrapper';
        this.publishMenuTrigger = '.gh-publishmenu-trigger';
        this.publishButton = '.gh-btn-blue';
        this.settingsButton = '.post-settings';
        this.deleteButton = '.settings-menu-delete-button';
        this.confirmDeleteButton = '.gh-btn-red';
        this.postsScreenUrl = `${this.properties["<URL>"]}/#/posts`;
        this.number = 1;
    }

    createPost(title, content) {
        cy.visit(`${this.properties["<URL_3_4_2>"]}/#/editor/post`);
        cy.get(this.titleInput).type(title);
        cy.get(this.contentInput).type(content);        
        cy.screenshot('ss_delete_post_create-post-step-1' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
          });
        this.publishPost();       
        cy.screenshot('ss_delete_post_create-post-step-2' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
          });
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
        cy.wait(1000);
    }

    deletePost(title) {
        cy.visit(this.postsScreenUrl);
        cy.wait(1000);
        cy.contains('h3', title).click({ force: true });        
        cy.screenshot('ss_delete_post_delete-post-step-1' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
          });

        cy.get(this.settingsButton).click();
        cy.get(this.deleteButton).click();
        cy.get(this.confirmDeleteButton, { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one confirmation button found, clicking the first one.');
                cy.screenshot("ss_delete_post_multiple_publish_buttons");
            }
            $buttons.first().click();            
            cy.screenshot('ss_delete_post_delete-post-step-2' + this.number, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
              });
        });
    }
}

module.exports = new PostManagerPageObject();
