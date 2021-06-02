///<reference types="cypress" />

import { Dashboard } from "../../support/locators/core"
import { Toolbar } from "../../support/locators/edit"



describe('Testing the bookmark and favourites', () => {
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
    it('opens the dashboard panel', () => {
        cy.get(Dashboard.panelContent + ' a.ccm-panel-back').scrollIntoView().click()
        cy.get(Dashboard.activeMenuItem).should('have.length.at.least', 13) // Default menu Items

    })
    it('opens the favourites menu and checks the count', () => {
        cy.get(Dashboard.favouritePanelSelect).scrollIntoView().click()
        cy.get(Dashboard.activeMenuItem).should('have.length', '6')

    })
    it('closes the favourites menu and goes to boards page', () => {
        cy.get(Dashboard.dashboardPanelSelect).scrollIntoView().click()
        cy.get(Dashboard.activeMenuItem + '[href*="/dashboard/boards"]').click()
    })
    it('makes boards a bookmark', () => {
        cy.get(Dashboard.bookmarkIcon).should('not.have.class', 'bookmarked')
        cy.get(Dashboard.bookmarkAdd).scrollIntoView().click()
        cy.get(Dashboard.bookmarkIcon).should('have.class', 'bookmarked')
    })
    it('checks the old bookmarks', () => {
        cy.get(Dashboard.panelContent + ' a.ccm-panel-back').click()
        cy.get(Dashboard.favouritePanelSelect).click()
        cy.get(Dashboard.activeMenuItem).should('have.length', '6')
    })
    it('reloads the dashboard panel', () => {
        cy.get(Dashboard.toolbarPanel).scrollIntoView().click()
        cy.wait(50);
        cy.get(Dashboard.toolbarPanel).scrollIntoView().click()
        cy.get(Dashboard.panelContent + ' a.ccm-panel-back').click()
        cy.get(Dashboard.favouritePanelSelect).click()
        cy.get(Dashboard.activeMenuItem).should('have.length', '7')
    })
    it('removes bookmark from boards', () => {
        cy.get(Dashboard.bookmarkIcon).should('have.class', 'bookmarked')
        cy.get(Dashboard.bookmarkRemove).click()
        cy.get(Dashboard.bookmarkIcon).should('not.have.class', 'bookmarked')
    })
    it('checks the bookmarks', () => {
        cy.get(Dashboard.favouritePanelSelect).scrollIntoView().click()
        cy.get(Dashboard.activeMenuItem).should('have.length', '7')
    })
    it('reloads the dashboard panel', () => {
        cy.get(Dashboard.toolbarPanel).scrollIntoView().click()
        cy.wait(50);
        cy.get(Dashboard.toolbarPanel).scrollIntoView().click()
        cy.get(Dashboard.panelContent + ' a.ccm-panel-back').click()
        cy.get(Dashboard.favouritePanelSelect).scrollIntoView().click()
        cy.get(Dashboard.activeMenuItem).should('have.length', '6')
    })
})