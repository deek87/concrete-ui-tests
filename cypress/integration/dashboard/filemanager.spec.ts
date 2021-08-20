import { Dashboard, Dialog, FileManager, Notification } from "../../support/locators/core"
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
        Cypress.Cookies.preserveOnce('CONCRETE_LOGIN', 'CONCRETE')
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
    describe('uploading file via drag and drop', () => {
        it('drags and drops a valid file', () => {
            if (Cypress.isBrowser('firefox')) {
                cy.get(FileManager.searchResultsContainer).attachFile('sample_curry.jpeg', { subjectType: 'drag-n-drop' })
            } else {
                cy.get(FileManager.dropzoneFileInput).attachFile('sample_curry.jpeg', { subjectType: 'input' })
            }

        })
        it('checks the file is shown in the dialog', () => {
            cy.get(FileManager.importDialogActiveTab).should('be.visible')
            cy.get(FileManager.importDialogFileItemWrapper).should('be.visible').and('have.length', '1')
        })
        it('adds a new folder name', () => {
            cy.get(FileManager.importDialogNewFolderButton).scrollIntoView().click()
            cy.get(FileManager.importDialogNewFolderName).scrollIntoView().type('Test Folder - 1')
        })
        it('uploads the file', () => {
            cy.intercept('*/ccm/system/file/upload_complete').as('uploadComplete')
            cy.get(Dialog.primaryButton).scrollIntoView().click()
            cy.wait('@uploadComplete')
            //cy.get(Notification.success).should('be.visible')
            //cy.get(Notification.close).click()
        })
        it('checks only uploaded file is visible', () => {
            cy.get(FileManager.resultName).should('have.length', '1')
            cy.get(FileManager.resultName).contains('sample_curry.jpeg')
        })
        it('deletes the file', () => {
            cy.get(FileManager.resultName).contains('sample_curry.jpeg').then($result => {
                const fileMenu = $result.parent().parent().find('td.ccm-search-results-menu-launcher button[data-toggle=dropdown]');
                fileMenu.trigger('mouseover')

                cy.wrap(fileMenu).click()

            })
            cy.get(FileManager.activeResultDelete).click()
            cy.get(Dialog.dangerButton).click()
        })
        it('verifies the file has been deleted', () => {
            cy.reload()
            cy.get(FileManager.searchResults + ' > tbody').children().should('have.length', '0')
        })
        it('removes the folder', () => {
            cy.intercept('*/ccm/system/tree/node/load_starting').as('loadNodes')
            cy.get(FileManager.headerJumpFolder).scrollIntoView().click()
            cy.wait('@loadNodes')
            cy.wait(50)
            cy.get(FileManager.treeItem).contains('File Manager').click()
            cy.get(FileManager.headerSearchInput).scrollIntoView().type('Test Folder - 1')
            cy.get(FileManager.headerSearchSubmit).click()
            cy.get(FileManager.resultName).contains('Test Folder - 1').then($result => {

                const fileMenu = $result.parent().parent().find('td.ccm-search-results-menu-launcher button[data-toggle=dropdown]')

                fileMenu.trigger('mouseover')

                cy.wrap(fileMenu).click()

            })
            cy.get(FileManager.activeResultDeleteFolder).click()
            cy.get(Dialog.dangerButton).click()
        })
        it('verifies the folder has been deleted', () => {
            cy.intercept('*/ccm/system/tree/node/load_starting').as('loadNodes')
            cy.get(FileManager.headerJumpFolder).scrollIntoView().click()
            cy.wait('@loadNodes')
            cy.get(FileManager.treeLabel).contains('File Manager').click()

            cy.get(FileManager.resultName).contains('Test Folder - 1').should('not.exist')
        })
    })

});