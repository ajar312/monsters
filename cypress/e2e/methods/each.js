describe('as a user I should be able to login to the hr app', () => {

    it('should practice each method', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        cy.get('[name="username"]').type('Admin')

        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()

        cy.url().should('include', 'dashboard')

        cy.get('[class="oxd-main-menu"] li').each((category) => {

            if (category.text().includes("Time")) {
                cy.wrap(category).click()
            }

        })


    });



});


// click on Admin, using each method, click on Nationalities









