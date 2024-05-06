describe('Gestión de posts en Ghost CMS ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.get('#identification').type('user@example.com');
        cy.get('#password').type('r7aHWhKneSw=');
        cy.get('#ember5').click();
        cy.wait(1000);
    });
  
    it('Crear post', () => {
        cy.visit('http://localhost:2368/ghost/#/editor/post');
        cy.get('.gh-editor-title').type('New Post Title');
        cy.get('.kg-prose').type('Descripcion del post');
        cy.wait(2000); 
        cy.get('.gh-publish-trigger', { timeout: 10000 }).should('be.visible').click();
        cy.wait(1000);
        cy.get('.gh-publishmenu-button').should('be.visible').click({ timeout: 10000 });
        cy.wait(5000);
    });
  
    it('Eliminar un post existente', () => {
        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.wait(4000);
        cy.get('.gh-post-list-title').contains('New Post Title').click();
        cy.get('.settings-menu-toggle').should('be.visible').click();
        cy.get('.settings-menu-delete-button').should('be.visible').click();
        cy.get('.gh-btn-red').should('be.visible').click();
        cy.wait(5000);
    });
  
    it('Editar un post existente', () => {
        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.wait(4000);
        cy.get('.gh-post-list-title').contains('miguel prueba t').click();
        cy.get('.gh-editor-title').clear().type('Post editado');
        cy.wait(2000);
        cy.get('.gh-publish-trigger', { timeout: 10000 }).should('be.visible').click();
        cy.wait(1000);
        cy.get('.gh-publishmenu-button').should('be.visible').click({ timeout: 10000 });
        cy.wait(5000);
    });
  
    it('Filtrar un post', () => {
        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.wait(4000);
        cy.get('.gh-contentfilter-menu .ember-basic-dropdown-trigger').first().click();
        cy.get('.ember-power-select-option').contains('Published posts').click();
        cy.wait(5000);
    });
  
    it('Filtrar los post programados', () => {
        cy.visit('http://localhost:2368/ghost/#/editor/post');
        cy.get('.gh-editor-title').type('Scheduled Post Title');
        cy.get('.kg-prose').type('Post programado');
        cy.wait(2000);
        cy.get('.gh-publish-trigger', { timeout: 10000 }).should('be.visible').click();
        cy.get('div.gh-publishmenu-radio-button:nth-child(2)').should('be.visible').click();
        cy.wait(1000);
        cy.get('.gh-publishmenu-button').should('be.visible').click({ timeout: 10000 });
        cy.wait(5000);
    });
  });
  