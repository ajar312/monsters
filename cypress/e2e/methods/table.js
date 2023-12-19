it('should verify the new tab', () =>{
    // verify if Barry is present in the list

    cy.visit('https://tablepress.org/demo/')
    //cy.get('table').contains('td', 'Barry');

    // cy.get('#tablepress-demo td')
    // .contains('Barry')
    // .should('have.text', 'Barry')

    cy.get('#tablepress-demo td').first().should('have.text', 'Gloria')
    cy.get('#tablepress-demo td').last().should('have.text', '$20')


    

})