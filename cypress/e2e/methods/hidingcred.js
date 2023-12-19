import { admin } from '../pages/admin'

describe('practicing hooks', () => {



    beforeEach(() => {
        cy.login()
    });


    it('Test 1', () => {

        cy.visit('/')
        cy.contains('Admin').click()
        cy.get(admin.addButton).click()


    });

    it('Test 2', () => {
        cy.visit('/')
        cy.contains("Claim").click()
    });

    it('Test 2', () => {
        cy.visit('/')
        cy.contains("Directory").click()
    });
});