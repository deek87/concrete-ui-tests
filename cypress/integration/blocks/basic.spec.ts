///<reference types="cypress" />

import { Composer } from "../../support/locators/composer"
import { Area, Block, Dialog, Notification } from "../../support/locators/core"
import { ckEditor, SitemapPanel, Toolbar } from "../../support/locators/edit"

describe('Testing the basic blocks', () => {
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

    describe('creates a new test page', () => {
        it('opens the sitemap', () => {
            cy.get(Toolbar.addPage).click()
        })
        it('clicks the empty page type', () => {
            cy.get(SitemapPanel.createPageLink).contains('Empty Page').click()
        })
    })
    describe('testing content block', () => {
        it('adds the content to block to main area', () => {
            cy.get(Area.zoneHandle('Main')).click('bottom')
            cy.get(Area.popoverMenuAddBlock).click('bottom')
            cy.get(Block.tile('content')).click('bottom')
            cy.get(ckEditor.saveButton).should('be.visible')
            cy.focused().as('ckEditor').click()
        })
        describe('tests the basic style options', () => {
            beforeEach(() => {
                cy.get(ckEditor.saveButton).should('be.visible')
                cy.focused().as('ckEditor').click()
            })
            it('testing the bold style', () => {
                cy.get('@ckEditor').click().type('hello world in bold')
                cy.get('@ckEditor').setSelection('hello world in bold')

                cy.get(ckEditor.boldButton).click()
                cy.get(ckEditor.boldButtonOn).should('be.visible')
                cy.get('@ckEditor').click().type('{end}{shift}{enter}')
                cy.get(ckEditor.boldButton).click()
                cy.get(ckEditor.boldButtonOff).should('be.visible')
            })
            it('testing the italic style', () => {
                cy.get('@ckEditor').click().type('hello world italicised')
                cy.get('@ckEditor').click().setSelection('hello world italicised')
                cy.get(ckEditor.italicButton).click()
                cy.get(ckEditor.italicButtonOn).should('be.visible')
                cy.get('@ckEditor').click().type('{end}{shift}{enter}')
                cy.get(ckEditor.italicButton).click()
                cy.get(ckEditor.italicButtonOff).should('be.visible')
            })
            it('testing the underline style', () => {
                cy.get('@ckEditor').click().type('hello world underlined')
                cy.get('@ckEditor').click().setSelection('hello world underlined')
                cy.get(ckEditor.underlineButton).click()
                cy.get(ckEditor.underlineButtonOn).should('be.visible')
                cy.get('@ckEditor').click().type('{end}{shift}{enter}')
                cy.get(ckEditor.underlineButton).click()
                cy.get(ckEditor.underlineButtonOff).should('be.visible')
            })
            it('testing the strike style', () => {
                cy.get('@ckEditor').click().type('hello world striked through')
                cy.get('@ckEditor').click().setSelection('hello world striked through')
                cy.get(ckEditor.strikeButton).click()
                cy.get(ckEditor.strikeButtonOn).should('be.visible')
                cy.get('@ckEditor').click().type('{end}{shift}{enter}')
                cy.get(ckEditor.strikeButton).click()
                cy.get(ckEditor.strikeButtonOff).should('be.visible')
            })
            it('testing the subscript style', () => {
                cy.get('@ckEditor').click().type('hello world subscript')
                cy.get('@ckEditor').click().setSelection('hello world subscript')
                cy.get(ckEditor.subscriptButton).click()
                cy.get(ckEditor.subscriptButtonOn).should('be.visible')
                cy.get('@ckEditor').click().type('{end}{shift}{enter}')
                cy.get(ckEditor.subscriptButton).click()
                cy.get(ckEditor.subscriptButtonOff).should('be.visible')
            })
            it('testing the superscript style', () => {
                cy.get('@ckEditor').click().type('hello world superscript')
                cy.get('@ckEditor').click().setSelection('hello world superscript')
                cy.get(ckEditor.superscriptButton).click()
                cy.get(ckEditor.superscriptButtonOn).should('be.visible')
                cy.get('@ckEditor').click().type('{end}{shift}{enter}')
                cy.get(ckEditor.superscriptButton).click()
                cy.get(ckEditor.superscriptButtonOff).should('be.visible')
            })
            it('testing the remove formatting', () => {
                cy.get('@ckEditor').click().type('{selectall}')
                cy.get(ckEditor.removeFormatButton).click()
            })
        })

        describe('tests the lists and justify options', () => {
            beforeEach(() => {
                cy.get(ckEditor.saveButton).should('be.visible')
                cy.focused().as('ckEditor')
            })
            it('creates a numbered list with 3 items', () => {
                cy.get('@ckEditor').click().type('{enter}hello world - list 1 - option 1')
                cy.get('@ckEditor').setSelection('hello world - list 1 - option 1')
                cy.get(ckEditor.numberedListButton).click()
                cy.get(ckEditor.numberedListButtonOn).should('be.visible')
                cy.get('@ckEditor').setCursorAfter('hello world - list 1 - option 1')
                cy.get('@ckEditor').type('{enter}hello world - list 1 - option 2')
                cy.get('@ckEditor').type('{enter}hello world - list 1 - option 3')
                cy.get('@ckEditor').type('{enter}{enter}')
                cy.get(ckEditor.numberedListButtonOff).should('be.visible')
            })
            it('changes the justification of those 3 items', () => {
                cy.get('@ckEditor').setSelection('hello world - list 1 - option 1')
                cy.get(ckEditor.justifyRightButton).click()
                cy.get(ckEditor.justifyRightButtonOn).should('be.visible')
                cy.get('@ckEditor').setSelection('hello world - list 1 - option 2')
                cy.get(ckEditor.justifyBlockButton).click()
                cy.get(ckEditor.justifyBlockButtonOn).should('be.visible')
                cy.get('@ckEditor').setSelection('hello world - list 1 - option 3')
                cy.get(ckEditor.justifyCenterButton).click()
                cy.get(ckEditor.justifyCenterButtonOn).should('be.visible')
                cy.get('@ckEditor').setCursorAfter('hello world - list 1 - option 3').type('{movetoend}')
            })

            it('creates a bulleted list with 3 items', () => {

                cy.get('@ckEditor').click().type('{movetoend}{enter}{enter}hello world - list 2 - option 1')
                cy.get('@ckEditor').setSelection('hello world - list 2 - option 1')
                cy.get(ckEditor.bulletedListButton).click()
                cy.get(ckEditor.bulletedListButtonOn).should('be.visible')
                cy.get('@ckEditor').setCursorAfter('hello world - list 2 - option 1')
                cy.get('@ckEditor').type('{enter}hello world - list 2 - option 2')
                cy.get('@ckEditor').type('{enter}hello world - list 2 - option 3')
                cy.get('@ckEditor').type('{enter}{enter}')
                cy.get(ckEditor.bulletedListButtonOff).should('be.visible')
                cy.get('@ckEditor').setSelection('hello world - list 2 - option 2')
                cy.get(ckEditor.indentButton).click()
            })

        })

        describe('saving the block', () => {
            it('saves the block', () => {
                cy.get(ckEditor.saveButton).should('be.visible').click('bottom')
                cy.get(Notification.success).should('be.visible')
            })
        })


    })

    describe('testing html block', () => {
        it('adds the html to block to main area', () => {
            cy.get(Area.zoneHandle('Main')).click('bottom')
            cy.get(Area.popoverMenuAddBlock).click('bottom')
            cy.get(Block.tile('html')).click('bottom')
        })
        it('enters partial html', () => {
            cy.get(Block.dialog).find('div[id="ccm-block-html-value"] textarea.ace_text-input').scrollIntoView().click('top', { force: true }).type('<div id="test-block-html">HELLO WORLD', { force: true })
            cy.get(Block.addButton).click()
            cy.get('div[id="test-block-html"]').should("be.visible").should('contain.text', 'HELLO WORLD')
        })
        it('edits the html', () => {
            cy.get('div[id="test-block-html"]').should("be.visible").then($block => {
                cy.wrap($block.parent()).click()
            })
            cy.get(Block.popupEdit).click('bottom')
            cy.get(Block.dialog).find('div[id="ccm-block-html-value"] textarea.ace_text-input').scrollIntoView().click('top', { force: true }).clear({ force: true }).type('<div id="test-block-html-2">HELLO WORLD 55', { force: true })
            cy.get(Block.addButton).click()
            cy.get('div[id="test-block-html-2"]').should("be.visible").should('contain.text', 'HELLO WORLD 55')
        })
        it('deletes the block', () => {
            cy.get('div[id="test-block-html-2"]').should("be.visible").then($block => {
                cy.wrap($block.parent()).click()
            })
            cy.get(Block.popupDelete).click()
            cy.get(Dialog.dangerButton).click()
        })


    })
    describe('removes the edits', () => {
        it('discard the draft', () => {
            cy.get(Toolbar.pageSettings).click()
            cy.get(Composer.discard).click('bottom')
        })
    })

})