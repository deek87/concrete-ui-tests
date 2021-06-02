import { Dashboard, FileManager } from "../../support/locators/core"
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
    it('selects the file manager', () => {
        cy.get(Dashboard.activeMenuItem + '[href*="/dashboard/files"]').click()

    })
    it('tests drag and drop upload', () => {
        cy.get(FileManager.searchResultsContainer).attachFile('sample_curry.jpeg', { subjectType: 'drag-n-drop' });
    })
});