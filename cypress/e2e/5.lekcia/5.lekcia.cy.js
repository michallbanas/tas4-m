describe("5th lesson - Kiwi.com", () => {
    beforeEach(() => {
        cy.setCookiesContext()
        cy.setBookingButton()
       
        cy.log("Visit Kiwi homepage")
        cy.visit("/en/")
    })
    it("check cookies and booking extension  button", () => {
        cy.log("Verify cookies")
        cy.getCookie("__kwc_agreed").should("have.a.property", "value", "true")
        cy.getCookie("__kwc_settings").should("have.a.property", "value", "%7B%22marketing%22%3Atrue%2C%22analytics%22%3Atrue%7D", )

        cy.log("Decode cookie value")
        cy.getCookie("__kwc_settings").should("exist").then((cookie) => {
            const cookieValue = cookie.value
            const decodedValue = decodeURIComponent(cookieValue)
            expect(decodedValue).to.eq('{"marketing":true,"analytics":true}')
        })

        cy.log("Verify booking extension button")
        cy.getAllLocalStorage().then(() => {
            const bookingExtensionButton = localStorage.getItem("bookingcom_extension_default")
            expect(bookingExtensionButton).to.eq("false")
        })
    })
  })
  