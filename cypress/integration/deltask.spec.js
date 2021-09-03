describe('Edit and Save the Added Task', () => {
    it('Edits the task in the list', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="messageText"]')
            .invoke('text')
            .then((textToBeDeleted) => {

                cy.get('[data-testid="sendButton"]')
                    .click()
                
                
                    
            });




    })
});