// pageObjects/PostPageObject.js

class PostPageObject {
    constructor() {
        this.titleInput = '.gh-editor-title';
        this.descriptionInput = '.koenig-editor__editor-wrapper';
        this.publishMenuTrigger = '.gh-publishmenu-trigger';
        this.publishButton = '.gh-btn-blue';
    }

    navigateToEditor() {
        cy.visit('/ghost/#/editor/post');      
        cy.screenshot('ss_create_post_navigate_editor' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
          });
    }

    enterPostDetails(title, description) {
        cy.get(this.titleInput).type(title);       
        cy.screenshot('ss_title_entered' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
          });
        cy.get(this.descriptionInput).type(description);   
        cy.screenshot('ss_create_post_description_entered' + this.number, {
            capture: 'viewport',
            clip: { x: 0, y: 0, width: 1000, height: 660 }
          });
    }

    publishPost() {
        cy.get(this.publishMenuTrigger, { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one publish button found, clicking the first one.');               
                cy.screenshot('ss_create_post_multiple_publish_buttons' + this.number, {
                    capture: 'viewport',
                    clip: { x: 0, y: 0, width: 1000, height: 660 }
                  });
            }
            $buttons.first().click();
            cy.screenshot("ss_create_post_publish_clicked");
        });

        cy.get(this.publishButton, { timeout: 10000 }).should('be.visible').then(($buttons) => {
            if ($buttons.length > 1) {
                cy.log('More than one publish button found, clicking the first one.');
                cy.screenshot("ss_create_post_multiple_publish_buttons");
            }
            $buttons.first().click();          
            cy.screenshot('ss_create_post_publish_clicked' + this.number, {
                capture: 'viewport',
                clip: { x: 0, y: 0, width: 1000, height: 660 }
              });
        });

        cy.wait(500); 
        cy.screenshot("ss_create_post_post_published");
    }
}

module.exports = new PostPageObject();
