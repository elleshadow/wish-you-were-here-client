describe('Dashboard Page', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000/');
        cy.get('input[name="name"]').type('Bobby-Joe');
        cy.get('input[name="pronouns"]').type('he/him');
        cy.get('a').click();
    })

    it('Should load Dashboard URL', () => {
        cy.url().should('eq', 'http://localhost:3000/');  // update with implemented router
    })

    // Check what should be displayed
    it('Should have a nav bar with logo, title, and logout button.', () => {
        // Need to test logo and title
        cy.get('.logout-btn').contains('Log Out');
    })

    it('User should be able to logout and be redirected to the login screen.', () => {
        // Need to test logo and title
        cy.get('.logout-btn').click();
        cy.url().should('eq', 'http://localhost:3000/'); // update with implemented router
        cy.get('.form-inner').contains('Login');
    })

    it('Should have a chat box with a label, chat window, text field, send button, and connected users', () => {
        cy.get('label[for="chat"]').contains('Chat');
        cy.get('.message-container').should('exist');
        cy.get('.message-box').should('exist');
        cy.get('input[placeholder="message..."]').should('exist');
        cy.get('.button-send').contains("Send");
        // Uncomment once server is stable
        // cy.get('.users-list-container').contains('Bobby-Joe');
        // cy.get('.users-list-container').contains('Connected Users');

    })

    it.only('Should be able to send a message in chat and have it appear in chat window.', () => {
        cy.get('.message-box').type('Hello I am a human!')
        // .type("{enter}");
        // cy.get('.button-send').click();
    })

    // it('Should have current user shown in connected users area.', () => {
    // })

    // it('Should have a live camera with a clickable cheese button that takes a photo.', () => {
    // })

    // it('Should have camera toggle option, a file picker and an image preview.', () => {
    // })

    // it('When user takes a photo, it should save to a gallery.', () => {
    // })

})