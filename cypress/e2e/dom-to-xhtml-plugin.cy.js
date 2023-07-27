describe('dom-to-xhtml plugin', () => {

    const URL = 'http://localhost:8080/demo/modules/dom-to-xhtml-plugin.html'

    it('Check ', () => {
        cy.visit(URL)
      
        cy.get('#content').click()

        cy.window().then((win) => {
            const editable = win.Aloha.getEditableById('content');
            const xhtmlContent = editable.getContents();
            expect(xhtmlContent).to.match('/<p>DOM-TO-XHTML PLUGIN<\/p>/');
        });
    })
})
