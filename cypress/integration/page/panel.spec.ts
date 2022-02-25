///<reference types="cypress" />

import { AddPanel } from "../../support/locators/edit"
describe('Checking the add panel', () => {
    beforeEach(() => {
        // before each test, we can automatically preserve the
        // 'session_id' and 'remember_token' cookies. this means they
        // will not be cleared before the NEXT test starts.
        //
        // the name of your cookies will likely be different
        // this is an example
        Cypress.Cookies.preserveOnce('CONCRETE_LOGIN', 'CONCRETE')

    })
    it('logs in as admin', () => {

        cy.login(Cypress.env('admin_username'), Cypress.env('admin_password'))
    })
    it('visits the home page', () => {
        cy.visit('/')
    })
    it('opens the add content panel', () => {
        cy.enterEditMode();
    })

    describe('Checking stacks', () => {

        it('selects stacks', () => {
            cy.get(AddPanel.dropdownToggle).click()
            cy.get(AddPanel.dropdownItem('stacks')).click()
            cy.wait(2000);
        });
    })
    describe('Checking clipboard panel', () => {

        it('selects clipboard', () => {
            cy.get(AddPanel.dropdownToggle).click()
            cy.get(AddPanel.dropdownItem('clipboard')).click()
            cy.wait(2000);
        });
    })
    describe('Checking the containers panel', () => {

        it('selects containers', () => {
            cy.get(AddPanel.dropdownToggle).click()
            cy.get(AddPanel.dropdownItem('containers')).click()
            cy.wait(2000);
        });
    })

    describe('Checking blocks', () => {

        it('selects blocks', () => {
            cy.get(AddPanel.dropdownToggle).click()
            cy.get(AddPanel.dropdownItem('blocks')).click()
            cy.get(AddPanel.allBlockTiles).should(($tiles) => {
                expect($tiles).to.have.length.above(1)
            })
            cy.wait(2000);
        });
        it('searches for html block', () => {
            cy.get(AddPanel.search).type('HTML');
            cy.get(AddPanel.allBlockTiles).should(($tiles) => {
                expect($tiles).to.have.length(1)
            })
        })
        it('checks the marketplace button', () => {
            cy.get(AddPanel.blockMarketPlace).scrollIntoView().click()
            cy.url().should('include', '/dashboard/extend/connect')
        })
    })
})






