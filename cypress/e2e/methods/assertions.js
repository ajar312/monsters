describe('as a user I should be able to login to the hr app', () => {

    it('should practice each method', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        cy.get('[name="username"]').type('Admin')

        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()
        cy.get('[href="/web/index.php/pim/viewPimModule"]').click()
        // explicit way below 
        // cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').then((x) => {
            
        //     expect('PIM').to.equal(x.text())
        // })

        // implicit way below
        // cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
        // .invoke('text')
        // .should('equal', 'PIM')

        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
        .invoke('text')
        .as('HeaderPIM')

        cy.contains('Employee List')
        .invoke('text')
        .as('Elist')

        cy.get('@HeaderPIM').should('equal', 'PIM')
        cy.get('@Elist').should('equal', 'Employee List')

        cy.contains('Reports').click()
       


    });
});