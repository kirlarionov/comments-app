describe("StartModal e2e tests", () => {
   it("should have a name added to the welcome text", () => {
      cy.visit("/")
      cy.get('input[name="usernameInput"]')
         .should("have.value", "")
         .type("Kirill Larionov")
         .should("have.value", "Kirill Larionov")
      cy.wait(1000)
      cy.get(".css-19ncj7m").click()
      cy.get(".css-19ncj7m").should("not.exist")
      cy.get(".css-gmuwbf")
         .find("strong")
         .should("have.text", "Kirill Larionov")

      cy.wait(4000)

      cy.visit("/")
      cy.get('input[name="usernameInput"]').should("have.value", "")
      cy.get(".css-19ncj7m").click()
      cy.get('input[name="usernameInput"]')
   })
})