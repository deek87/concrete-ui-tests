/// <reference types="cypress" />

import { Block, Dialog, Notification } from "../../locators/core"

Cypress.Commands.add('saveBlock', () => {
    cy.intercept(Block.loadLink).as('blockLoad')
    cy.get(Block.addButton).click()
    cy.wait('@blockLoad')
    cy.get(Notification.success).should('be.visible')
    cy.get(Notification.close).click()
})

Cypress.Commands.add('deleteBlock', () => {
    cy.get(Block.popupDelete).click()
    cy.get(Dialog.dangerButton).click()
    cy.get(Notification.success).should('be.visible')
    cy.get(Notification.close).click()
})
