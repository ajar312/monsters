/// <reference types="cypress" />

describe('practive browser navigation', () => {

    it('should verify the new tab', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example a').invoke('removeAttr', 'target').click()

        cy.get('.example h3').invoke('text').should('equal', 'New Window')

        cy.go('back')

        


    });


});