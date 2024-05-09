import BasePageObject from "../support/BasePageObject";

class LoginPageObject extends BasePageObject { 


  goToSignIn() {
    cy.visit(this.properties['<URL_3_4_2>']);
  }

  setEmail() {
    const field = cy.get(this.elements.email)
    field.type(this.properties['<GHOST_MAIL>'])
  }

  setPassword() {
    const field = cy.get(this.elements.password)
    field.type(this.properties['<GHOST_PASSWORD>'])
  }

  clickSignIn() {
    const singInBtn = cy.get(this.elements.signIn);
    singInBtn.click();
  }
  
  signIn() {
    this.goToSignIn()
    this.setEmail()
    this.setPassword()
    this.clickSignIn()
  }
}

export default new LoginPageObject()