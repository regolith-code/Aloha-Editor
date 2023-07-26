describe("LinkBrowser Plugin", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/demo/cypress/linkbrowser-plugin-testing");
    cy.get("#main").click();
    cy.get("#ui-id-2").click();
  });

  it("opens Aloha Editor UI when clicked", () => {
    cy.get(".aloha-ui.aloha-ui-toolbar.ui-draggable").should("exist");
  });
});
