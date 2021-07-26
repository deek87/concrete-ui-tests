///<reference types="cypress" />
import { Block, FileSelect, Notification } from '../../support/locators/core'
import { CheckInPanel, ckEditor, PageSettings, Toolbar } from '../../support/locators/edit'

describe('Adding content to a page', () => {
    before(() => {
        cy.clearCookies()
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
        cy.dragBlock('content', 'Main')
        cy.get(ckEditor.saveButton).should('be.visible')
        cy.focused().type('hello world')
        cy.get(ckEditor.saveButton).click()
        cy.get(Notification.success).should('be.visible')
    })

    it('visits the home page', () => {
        cy.visit('/')
    })
    it('adds an image block', () => {

        cy.dragBlock('image', ['Main', 'Column 3'], true)
        cy.fileManager('open')
        cy.fileManager('search', 'house')
        cy.get(FileSelect.sort).click()
        cy.get(FileSelect.tableRadio).should('have.length', 2)
        cy.get(FileSelect.sort).click()
        cy.get(FileSelect.gridLabel).should('have.length', 2)
        cy.fileManager('search', 'houses', true)
        cy.get(Block.addButton).click('bottom')
        cy.get(Notification.success).should('be.visible')
    })
    it('publishes the new version', () => {
        cy.visit('/')
        cy.get(Toolbar.checkOut).click();
        cy.get(CheckInPanel.comments).type('test version')
        cy.get(CheckInPanel.save).click()
        cy.get(Notification.infoPrimaryButton).click()
        cy.get(Toolbar.pageSettings).click()
        cy.get(PageSettings.versions).click()
        cy.get(PageSettings.pageVersionCount).should('have.length.at.least', 2)
        cy.get(PageSettings.activePageVersionMenu).should('match', PageSettings.pageVersionMenu(2))
    })
    it('removes the new version', () => {
        cy.visit('/')
        cy.get(Toolbar.pageSettings).click()
        cy.get(PageSettings.versions).click()
        cy.get(PageSettings.pageVersionMenu(1)).click()
        cy.get(PageSettings.popupMenu).should('be.visible')
        cy.get(PageSettings.popupApprove).click()
        cy.get(Notification.success).should('be.visible')
        cy.get(PageSettings.pageVersionMenu(2)).click()
        cy.get(PageSettings.popupMenu).should('be.visible')
        cy.get(PageSettings.popupDelete).click()
        cy.get(Notification.success).should('be.visible')
        cy.get(PageSettings.pageVersionCount).should('have.length.at.least', 1)

    })
})