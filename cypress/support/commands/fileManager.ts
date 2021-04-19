/// <reference types="cypress" />

import { Dialog, FileSelect, Form } from "../locators/core"

Cypress.Commands.add('selectFile', (file: string | number) => {
    selectFile(file)
})

Cypress.Commands.add('fileManager', (method: string, ...args: any[]) => {

    if (method.toLowerCase().replace(/\_\s/ig, '') === 'selectfile') {
        selectFile(args[0])
    }

    if (method.toLowerCase().replace(/\_\s/ig, '') === 'open') {
        openFileManager(args[0])
    }

    if (method.toLowerCase().replace(/\_\s/ig, '') === 'search' || method.toLowerCase().replace(/\_\s/ig, '') === 'searchfile') {
        searchFile(args[0], args[1])
    }

    if (method.toLowerCase().replace(/\_\s/ig, '') === 'searchandselect' || method.toLowerCase().replace(/\_\s/ig, '') === 'searchselect') {
        searchFile(args[0], true)
    }

})


function openFileManager(name: string = null) {
    if (name === null) {
        name = 'fID'
    }
    cy.get(Form.fileSelectorInputName(name) + ' + div.ccm-item-selector-choose > button').scrollIntoView().click('bottom')
}

function selectFile(file: string | number) {

    if (typeof file === 'number') {
        if (file < 1) {
            throw new Error('Invalid FileID')
        }
        cy.get(FileSelect.fileRadio(file)).scrollIntoView().click('bottom')
    } else {
        cy.get(FileSelect.base).then($fm => {
            if ($fm.find('button > i.fas.fa-th').length > 0) {
                cy.get(FileSelect.gridLabel).contains(file).scrollIntoView().click('bottom')
            } else {
                cy.get(FileSelect.tableLabel).contains(file).scrollIntoView().then($label => {
                    $label.parent().find('input').trigger('click')
                })
            }
        })
    }
    cy.get(Dialog.primaryButton).click()
}

function searchFile(fileName: string, select: boolean = false) {
    selectSideMenu('Search')
    cy.get(FileSelect.search).scrollIntoView().type(fileName)
    cy.get(FileSelect.searchSubmit).click('bottom')
    if (select) {
        selectFile(fileName)
    }
}

function selectSideMenu(option: string = 'File Manager') {
    cy.get(FileSelect.menuItem).contains(option).scrollIntoView().click('bottom')
}