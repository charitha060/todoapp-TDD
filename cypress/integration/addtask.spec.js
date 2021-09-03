describe('Creating a task',()=>{
    it('Displays the task in the list',()=>{
        cy.visit('http://localhost:3000');
        
        cy.get('[data-testid="messageText"]')
        .type('New Task to be added');

        cy.get('[data-testid="sendButton"]')
        .click();

        cy.get('[data-testid="messageText"]')
        .should('have.value','');

        cy.contains('New Task to be added')
    })
})