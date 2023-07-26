describe("Header Ids Plugin", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/demo/cypress/headerids-plugin-testing");
    cy.get("#main").click();
  });

  it("opens Aloha Editor UI when clicked", () => {
    cy.get(".aloha-ui.aloha-ui-toolbar.ui-draggable").should("exist");
  });
});
