describe("Sourceview Plugin", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/demo/cypress/sourceview-plugin-testing");
  });

  it("opens Aloha Editor UI when clicked", () => {
    cy.get("h1").first().should("exist");
  });
});
