class Utils {
    
    screenshot(name, options = undefined) {
        cy.screenshot(name+"_"+Cypress.browser.name, options)
    }
    

}

export default new Utils();