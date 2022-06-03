describe('Dashboard Page', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000/');
        cy.wait(3000)
        cy.get('input[name="name"]').type('Bobby-Joe');
        cy.get('input[name="pronouns"]').type('he/him');
        cy.get('.submit-name-btn').click();
    })

    it('Should load Dashboard URL', () => {
        cy.url().should('eq', 'http://localhost:3000/dashboard');
    })

    it('Should have a nav bar with logo, title, and logout button.', () => {
        cy.get('.app-title').contains('✨Wish You Were Here✨');
        cy.get('.logout-btn').contains('Log Out');
    })

    it('User should be able to logout and be redirected to the login screen.', () => {
        cy.get('.logout-btn').click();
        cy.url().should('eq', 'http://localhost:3000/');
        cy.get('.form-inner').contains('Login');
    })

    it('Should have a chat box with a label, chat window, text field, send button, and connected users', () => {
        cy.get('label[for="chat"]').contains('Chat');
        cy.get('.message-container').should('exist');
        cy.get('.message-box').should('exist');
        cy.get('input[placeholder="message..."]').should('exist');
        cy.get('.button-send').contains("Send");
        cy.get('.users-list-container').contains('Bobby-Joe');
        cy.get('.users-list-container').contains('Connected Users');

    })

    it('Should be able to send a message in chat and have it appear in chat window.', () => {
        cy.get('.message-box').type('Hello I am a human!')
        cy.get('.button-send').click();
        cy.get('.message-container').contains('Hello I am a human!')
    })

    it('Should have current user shown in connected users area.', () => {
        cy.get('.users-list-container').contains('Bobby-Joe');
    })

    it('Should have camera, a button to take a photo, a camera on/off toggle option, a file picker, and an image preview.', () => {
        cy.get('video').should('exist');
        cy.get('.cheese').should('exist');
        cy.get('.btn-styled').should('exist');
        cy.get('.file-input').should('exist');
        cy.get('.preview-stage').contains('Image Preview:')
    })

    it.only('When user takes a photo, it should save to a gallery. If user presses clear button, it removes them from gallery', () => {
        cy.get('.cheese').click();
        cy.get('.sample-image').should('have.length', 1)
        cy.get('.cheese').click();
        cy.get('.sample-image').should('have.length', 2)
    })

})