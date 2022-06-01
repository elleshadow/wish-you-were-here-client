describe('Landing Page', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000/?');
    })

    it('Should load landing page URL', () => {
        cy.url().should('eq', 'http://localhost:3000/?');
    })

    // Check what should be displayed
    it('Should have a login form with title, name input, pronoun input and optional email input', () => {
        cy.get('.form-inner').contains('Login');
        cy.get('.form-inner').contains('Name');
        cy.get('.form-inner').contains('Pronouns');
        cy.get('.form-inner').contains('Email');
        cy.get('button').contains('Submit');
    })

    it('User should be able to login with just a name', () => {
        cy.get('input[name="name"]').type('Bobby-Joe');
        cy.get('button').click();
    }) 

})