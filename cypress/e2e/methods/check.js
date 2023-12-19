/// <reference types="cypress" />

// describe('', () => {
//     it('', () => {
//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

//         cy.get('[name="username"]').type('Admin')

//         cy.get('[name="password"]').type('admin123')

//         cy.get('[type="submit"]').click()

//         cy.contains('Admin').click()
//         cy.get('[class="oxd-icon bi-plus oxd-button-icon"]').click()// add

//         cy.get('.oxd-select-text-input')

//             .eq(0)
//             .click()
//             .get('.oxd-select-option')
//             .contains('ESS')
//             .click()

//             cy.get('.oxd-autocomplete-text-input > input').type('Paul Collings')// employee name
//             cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')            .eq(0)
//             .click()
//             .get('[class="oxd-select-text-input"]')
//             .contains('Enabled')
//             .click()

        

        

//     });
// });

describe('', () => {
    it('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        cy.get('[name="username"]').type('Admin')

        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()

        cy.contains('PIM').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Harry')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Potter')
        cy.get('.oxd-button--secondary').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.orangehrm-container').each((category) => {

            if (category.text().includes("Harry Potter")) {
                cy.wrap(category).click()
            }

        })
        

        

    });
});











