/// <reference types="cypress" />
import { Area, Block } from '../locators/core'
Cypress.Commands.add('enterEditMode', (block_handle: string = 'content') => {

    cy.get('div[id="ccm-toolbar"] ul li[data-guide-toolbar-action="add-content"] a').click()
    cy.get('div[id="ccm-panel-add-blocktypes-list"]').get(Block.tile(block_handle))
})

Cypress.Commands.add('dragBlock', (block_handle: string, area_handle: string | string[], hasPopup: boolean = false) => {
    cy.enterEditMode(block_handle)
    cy.intercept(Block.addLink).as('blockLoad')
    let selector: string
    if (Array.isArray(area_handle)) {
        selector = Area.subDragZone(area_handle[0], area_handle[1])
    } else {
        selector = Area.dragZone(area_handle)
    }



    cy.get(Block.tile(block_handle)).should('exist').scrollIntoView()
        .get(selector).should('exist')
    cy.get(selector).then(
        ($drop) => {

            const coords = $drop[0].getBoundingClientRect()
            cy.scrollTo(0, coords.y - 100, { duration: 100 })
            cy.wait(1000)
            cy.get(Block.tile(block_handle)).scrollIntoView().trigger('mousedown', { which: 1 })

            cy.get(Block.draggedTile).trigger('mousemove', { duration: 0, pageX: coords.left + coords.width * 0.5, pageY: coords.top + coords.height * 0.5 }).wait(200).trigger('mouseup', { force: true })
            cy.wait('@blockLoad')
        })

    if (hasPopup) {
        return cy.get(Block.dialog).should('be.visible')
    }
})