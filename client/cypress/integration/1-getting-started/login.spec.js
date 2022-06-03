describe('Landing Page', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000/');
    })

    it('Should load landing page URL', () => {
        cy.url().should('eq', 'http://localhost:3000/');
    })

    it('Should have a login form with title, name input, pronoun input and optional email input', () => {
        cy.get('.form-inner').contains('Login');
        cy.get('.form-inner').contains('Name');
        cy.get('.form-inner').contains('Pronouns');
        cy.get('.form-inner').contains('Email');
        cy.get('button').contains('Submit');
    })

    it('User should be able to login with just a name', () => {
        cy.get('input[name="name"]').type('Bobby-Joe');
        cy.get('.submit-name-btn').click();
        cy.url().should('eq', 'http://localhost:3000/dashboard');
    }) 

    it('User should be able to login with just a name and pronouns', () => {
        cy.get('input[name="name"]').type('Bobby-Joe');
        cy.get('input[name="pronouns"]').type('he/him');
        cy.get('.submit-name-btn').click();
        cy.url().should('eq', 'http://localhost:3000/dashboard');
    }) 

    it('User should be able to login with a name, pronouns, and email address', () => {
        cy.get('input[name="name"]').type('Bobby-Joe');
        cy.get('input[name="pronouns"]').type('he/him');
        cy.get('input[name="email"]').type('bbjoe@monster-energy.edu');
        cy.get('.submit-name-btn').click();
        cy.url().should('eq', 'http://localhost:3000/dashboard');
    }) 

    it('User should not be able to login without a name', () => {
        cy.get('.submit-name-btn').click();
        cy.get('h3').contains('Please input a name.');
        cy.url().should('eq', 'http://localhost:3000/');
    }) 
})