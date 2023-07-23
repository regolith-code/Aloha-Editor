describe('cite plugin', () => {
    const URL = 'http://localhost:8080/demo/cypress/cite-plugin.html'

    it('Check if content is editable', () => {
        cy.visit(URL)

        cy.get('#content').click()
    })
})
