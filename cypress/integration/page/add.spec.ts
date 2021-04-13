///<reference types="cypress" />
import { Notification } from '../../support/locators/core';
import { ckEditor } from '../../support/locators/edit'

describe('Adding content to a page', () => {
    before(() => {
        cy.clearCookies();
    })
    beforeEach(() => {
        // before each test, we can automatically preserve the
        // 'session_id' and 'remember_token' cookies. this means they
        // will not be cleared before the NEXT test starts.
        //
        // the name of your cookies will likely be different
        // this is an example
        Cypress.Cookies.preserveOnce('CONCRETE5_LOGIN', 'CONCRETE5')
    })
    it('logs in as admin', () => {

        cy.login(Cypress.env('admin_username'), Cypress.env('admin_password'))
    })


    it('visits the home page', () => {
        cy.visit('/')
    })

    it('adds a content block', () => {
        cy.dragBlock('content', 'Main');
        cy.wait(1000);
        cy.get(ckEditor.saveButton).should('be.visible');
        cy.focused().type('hello world');
        cy.get(ckEditor.saveButton).click();
        cy.get(Notification.success).should('be.visible');
    })

    it('visits the home page', () => {
        cy.visit('/')
    })
    it('adds an image block', () => {

        cy.dragBlock('image', ['Main', 'Column 3'], true);
        cy.wait(1000)
    })
})