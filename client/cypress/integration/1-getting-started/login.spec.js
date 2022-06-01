describe('Landing Page', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000');
    })

    it('Should load landing page URL', () => {
        cy.url().should('eq', 'http://localhost:3000/');
    })

    // Check what should be displayed
    it('Should have a title', () => {
        cy.contains('Turing Cafe Reservations');
    }) 
})