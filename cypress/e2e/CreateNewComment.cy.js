describe("Create New Comment e2e tests", () => {
   const dateNow = new Date().toLocaleString("ru-RU").slice(0, -3)

   it("should added comment in 'My Comments' list", () => {
      cy.visit("/create-new-comment")

      cy.get("input[name='title']").type(`Test TITLE - ${dateNow}`)
      cy.get("textarea[name='text']").type("Test TEXT")
      cy.get("input[name='email']").type("Test EMAIL")
      cy.get("button[type='submit']").click()
      cy.wait(2000)
      cy.contains("button", "← Back to Main").click()

      cy.get('input[name="usernameInput"]').type("Kirill Larionov")
      cy.wait(1000)
      cy.get(".css-19ncj7m").click()
      cy.contains("button", "OPEN ↓").click()
      cy.contains("div", dateNow)
   })
})
