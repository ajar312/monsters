/// <reference types="cypress" />


// describe('', () => {
//     it('', () => {

//         cy.visit('https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_active_element')

//         cy.get('[name="iframeResult"]').then((iframe) => {

//             const iframeDocument = iframe.contents().find('body')

//             cy.wrap(iframeDocument)
//                 .find('div')
//                 .find('button')
//                 .contains('3')
//                 .click()

//         })



//     });
// });



describe('', () => {
    it('', () => {

        cy.visit('https://nxtgenaiacademy.com/iframe/')

        // cy.get('[name="formpage"]').then((iframe) => {

        //     const iframeDocument = iframe.contents().find('[name="vfb-5"]')

        //     cy.wrap(iframeDocument)
        //         .type('Ajar')

        // })
        cy.get('[name="formpage"]').then((iframe) =>{
            const iframeDocument = iframe.contents().find('[name="vfb-7"]')
            cy.wrap(iframeDocument).type('Duishembieva')

        })


    });
});





