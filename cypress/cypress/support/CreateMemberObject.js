class CreateMemberObject  { 


    createMember() {
        cy.wait(2000);
        cy.get("a#ember30").click();
        cy.wait(2000);
        cy.get("a#ember52").click();
        cy.wait(2000);
        cy.get("input#member-name").type("miembro test para editar");
        cy.get("input#member-email").type("miembro@test.com");
        cy.get("textarea#member-note").type("Esto es un texto de prueba");
        cy.contains('button', 'Save').click();
        cy.wait(2000);
        cy.go('back');
        cy.wait(2000);
    }
  
  }

  export default new CreateMemberObject()