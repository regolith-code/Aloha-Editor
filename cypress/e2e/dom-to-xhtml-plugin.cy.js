describe('dom-to-xhtml plugin', () => {

    const URL = 'http://localhost:8080/demo/cypress/dom-to-xhtml-plugin.html'

    it('Check ', () => {
        cy.visit(URL)
      
        cy.get('#content').click()
    })
})