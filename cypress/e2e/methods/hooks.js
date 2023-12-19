import {admin} from '../pages/admin'
describe('practicing hooks', () => {

    before(() => {
        cy.fixture('users').then((data) => {
            globalThis.data = data
        })

    })

    beforeEach(() => {
        cy.login(data.username, data.password)
    });


    it('Test 1', () => {

        cy.visit('/')
        cy.contains('Addmin').click()
        cy.get(admin.addButton).click()
    });

    it.skip('Test 2', () => {
        cy.visit('/')
        cy.contains("Claim").click()
    });

    it.skip('Test 2', () => {
        cy.visit('/')
        cy.contains("Directory").click()
    });
});