Cypress.Commands.add('visitarTela', () =>{
    cy.visit('https://erickwendel.github.io/vanilla-js-web-app-example/')
})

// Scenario: Submitting an image with invalid inputs
Cypress.Commands.add('enviarFormulario_1', () => {
    cy.get('#title')
    .should('have.value', '')
    cy.get('#imageUrl')
    .should('have.value', '')
    cy.get('#btnSubmit')
    .click()
    .get('#titleFeedback')
    .should('be.visible')
    .get('#urlFeedback')
    .should('be.visible')
})

//   Scenario: Submitting an image with valid inputs using enter key
Cypress.Commands.add('enviarFormulario_2', () => {
    cy.get('#title')
    .type('Alien BR')
    cy.get('#imageUrl')
    .type('https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg')
    cy.get('#btnSubmit')
    .click()
    .wait(2000)
    cy.get(':nth-child(4) > .card > figure > .card-img-top')
    .should('be.visible')
    cy.window().then((window)=>{
        const key=window.localStorage.getItem('tdd-ew-db');
        expect(key).to.equal('[{"title":"Alien BR","imageUrl":"https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg"}]')
    })
    cy.get('#title')
    .should('be.empty')
    cy.get('#imageUrl')
    .should('be.empty')
})
//   Scenario: Refreshing the page after submitting an image clicking in the submit button
Cypress.Commands.add('enviarFormulario_3', () => {
    cy.get('#title')
    .type('BR Alien')
    cy.get('#imageUrl')
    .type('https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg')
    cy.get('#btnSubmit')
    .click()
    // .wait(5000)
    cy.reload()
    .get('.card-img-top')
    .should('be.visible')

})