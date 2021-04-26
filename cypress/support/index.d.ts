/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        login(value: string, password: string, page?: string): void
        enterEditMode(value?: string): void
        dragBlock(block_handle: string, area_handle: string | string[], hasPopup?: boolean): Chainable<Element> | void
        drag(dragSelector: string, dropSelector: string): Chainable<Element>
        fileManager(method: string, ...args: any[]): void
        sitemap(method: string, ...args: any[]): void
        saveBlock(): void
        deleteBlock(): void
        setSelection(selection: string)
        selection(fn: (currentSubject: JQuery<Element>) => void): Chainable<Element>
        setCursor(selection: string, setAfter?: boolean)
        setCursorBefore(selection: string)
        setCursorAfter(selection: string)
    }
}