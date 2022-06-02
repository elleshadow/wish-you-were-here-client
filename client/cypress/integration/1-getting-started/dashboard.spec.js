describe('Dashboard Page', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000/?');
        cy.get('input[name="name"]').type('Bobby-Joe');
        cy.get('input[name="pronouns"]').type('he/him');
        cy.get('a').click();
    })

    it('Should load Dashboard URL', () => {
        cy.url().should('eq', 'http://localhost:3000/?');  // update with implemented router
    })

    // Check what should be displayed
    it('Should have a nav bar with logo, title, and logout button.', () => {
        
    })

    it('Should have a chat box with a label, chat window, text field, send button, and connected users', () => {
    })

    it('Should have a live camera with a clickable cheese button that takes a photo', () => {
    })

    it('Should have camera toggle option, a file picker and an image preview', () => {
    })

    it('When user takes a photo, it should save to a gallery', () => {
    })

})