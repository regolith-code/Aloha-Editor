describe("Ribbon Plugin", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/demo/cypress/ribbon-plugin-testing");
  });

  it("creates a ribbon NavBar", () => {
    cy.get(".aloha-ribbon").should("exist");
  });
});
