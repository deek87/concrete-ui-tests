/// <reference types="cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email: string, password: string, page: string = null) => {
    cy.visit('/index.php/login');
    cy.get('#uName').type(email);
    cy.get('#uPassword').type(password);
    cy.get('div.authentication-type > form button.btn-primary').click();
    cy.getCookie('CONCRETE5_LOGIN').should('exist');
    if (page) {
        cy.visit(page);
    }
    cy.get('body').then(($body) => {
        if ($body.find('button[data-action="agree-privacy-policy"]').length) {
            $body.find('button[data-action="agree-privacy-policy"]').trigger('click');
        }
        return $body;
    })

})

Cypress.Commands.add('drag', (dragSelector: string, dropSelector: string) => {
    cy.get(dragSelector).should('exist').scrollIntoView()
        .get(dropSelector).should('exist');


    cy.get(dropSelector).then(
        ($drop) => {

            const coords = $drop[0].getBoundingClientRect();
            cy.scrollTo(0, coords.y - 200, { duration: 1 }).wait(1000);
            cy.get(dragSelector).scrollIntoView().trigger('mousedown', { which: 1 }).trigger('mousemove', { duration: 0, pageX: coords.left + coords.width * 0.4, pageY: coords.top + coords.height * 0.4 }).wait(100).trigger('mouseup', { force: true });
            return cy.get(dragSelector);
        })
});

