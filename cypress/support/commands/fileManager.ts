/// <reference types="cypress" />

import { Dialog, FileSelect, Form } from "../locators/core"



Cypress.Commands.add('fileManager', (method: string, ...args: any[]) => {

    if (method.toLowerCase().replace(/\_\s/ig, '') === 'selectfile' || method.toLowerCase().replace(/\_\s/ig, '') === 'select') {
        selectFile(args[0])
    }

    if (method.toLowerCase().replace(/\_\s/ig, '') === 'selectfolder') {
        selectFolder(args[0])
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
    if (method.toLowerCase().replace(/\_\s/ig, '') === 'clear' || method.toLowerCase().replace(/\_\s/ig, '') === 'clearfile') {
        clearFile(args[0])
    }
})

function clearFile(name: string = null) {
    if (name === null) {
        name = 'fID'
    }
    cy.get(Form.fileSelectorInputName(name)).then($fileSelect => {
        $fileSelect.next().find('button.ccm-item-selector-reset').trigger('click')
    })
}


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

function selectFolder(folder: string) {
    cy.intercept(/.*\/(?:index\.php?\/)ccm\/system\/file\/chooser\/get_folder_files\/[\d]+.*/).as('getFolderFiles')
    cy.get(FileSelect.base).then($fm => {
        if ($fm.find('button > i.fas.fa-th').length > 0) {
            cy.get(FileSelect.gridLabel).contains(folder).scrollIntoView().click('bottom')
        } else {
            cy.get(FileSelect.tableLabel).contains(folder).scrollIntoView().click('bottom')
        }
    })
    cy.wait('@getFolderFiles')
}

function searchFile(fileName: string, select: boolean = false) {
    selectSideMenu('Search')
    cy.get(FileSelect.search).scrollIntoView().clear().type(fileName)
    cy.get(FileSelect.searchSubmit).click('bottom')
    if (select) {
        selectFile(fileName)
    }
}

function selectSideMenu(option: string = 'File Manager') {
    cy.get(FileSelect.menuItem).contains(option).scrollIntoView().click('bottom', { force: true })
}