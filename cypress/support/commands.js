Cypress.Commands.add("setCookiesContext", () => {
    cy.log("Set cookies - agreed")
    cy.setCookie("__kwc_agreed", "true")
    cy.setCookie("__kwc_settings", "%7B%22marketing%22%3Atrue%2C%22analytics%22%3Atrue%7D")
})

Cypress.Commands.add("setBookingButton", () => {
    cy.log("Uncheck booking extension button")
    localStorage.setItem("bookingcom_extension_default", "false")
})

