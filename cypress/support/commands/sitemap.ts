/// <reference types="cypress" />

import { PageSelect, Form, Sitemap } from "../locators/core"

Cypress.Commands.add('selectPage', (page: string) => {
    selectPage(page)
})

Cypress.Commands.add('sitemap', (method: string, ...args: any[]) => {

    if (method.toLowerCase().replace(/\_\s/ig, '') === 'selectpage' || method.toLowerCase().replace(/\_\s/ig, '') === 'select') {
        selectPage(args[0])
    }

    if (method.toLowerCase().replace(/\_\s/ig, '') === 'open') {
        openSiteMap(args[0])
    }

    if (method.toLowerCase().replace(/\_\s/ig, '') === 'search' || method.toLowerCase().replace(/\_\s/ig, '') === 'searchpage') {
        searchPage(args[0], args[1])
    }

    if (method.toLowerCase().replace(/\_\s/ig, '') === 'searchandselect' || method.toLowerCase().replace(/\_\s/ig, '') === 'searchselect') {
        searchPage(args[0], true)
    }

    if (method.toLowerCase().replace(/\_\s/ig, '') === 'clear' || method.toLowerCase().replace(/\_\s/ig, '') === 'clearpage') {
        clearPage(args[0])
    }

})


function openSiteMap(name: string = null) {
    if (name === null) {
        name = 'cID'
    }
    cy.get(Form.pageSelectorInputName(name) + ' + div.ccm-item-selector-choose > button').scrollIntoView().click('bottom')
}


function clearPage(name: string = null) {
    if (name === null) {
        name = 'cID'
    }
    cy.get(Form.pageSelectorInputName(name)).then($pageSelect => {
        $pageSelect.next().find('button.ccm-item-selector-reset').trigger('click')
    })
}

function selectPage(page: string) {
    cy.get(Sitemap.treeLabel).contains(page).click()
}

function selectPageList(page: string) {
    // @TODO:: implement this with the weird page search
}

function searchPage(pageName: string, select: boolean = false) {
    selectSideMenu('Search')
    cy.get(PageSelect.search).scrollIntoView().type(pageName)
    cy.get(PageSelect.searchSubmit).click('bottom')
    /*if (select) {
        selectPageList(pageName)
    }*/
}

function selectSideMenu(option: string = 'Full Sitemap') {
    cy.get(PageSelect.menuItem).contains(option).scrollIntoView().click('bottom')
}