describe('list plugin', () => {
    const URL = 'http://localhost:8080/demo/cypress/highlighteditables-plugin.html'

    it('Check if content is editable', () => {
        cy.visit(URL)
      
        // Verifique que inicialmente el contenido no tiene la clase 'aloha-editable-highlight'
        cy.get('#content').should('not.have.class', 'aloha-editable-highlight')

        // Simula el paso del mouse usando realHover() del plugin 'cypress-real-events'
        cy.get('#content').realHover()
        cy.get('#main').realHover()
        
        // Verifique que ahora el contenido tiene la clase 'aloha-editable-highlight'
        cy.get('#content').should('have.class', 'aloha-editable-highlight')
    })
})
