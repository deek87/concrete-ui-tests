///<reference types="cypress" />

import { Composer } from "../../support/locators/composer"
import { Area, Block, Form } from "../../support/locators/core"
import { AddPanel, SitemapPanel, Toolbar } from "../../support/locators/edit"
before(() => {
    cy.clearCookies()
})
describe('Testing the navigation blocks', () => {
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
    it('visits the home page', () => {
        cy.visit('/')
    })

    describe('creates a new test page', () => {
        it('opens the sitemap', () => {
            cy.get(Toolbar.addPage).click()
        })
        it('clicks the empty page type', () => {
            cy.get(SitemapPanel.createPageLink).contains(Cypress.env('is_atomik') ? 'Page' : 'Empty Page').scrollIntoView().click({ force: true })
        })
    })

    describe('testing FAQ block', () => {
        it('adds the FAQ to block to main area', () => {
            cy.get(Area.zoneHandle('Main')).scrollIntoView().click('bottom')
            cy.get(Area.popoverMenuAddBlock).click('bottom')
            cy.get(AddPanel.dropdownToggle).should('be.visible').click()
            cy.intercept(AddPanel.genericLink).as('addPanel')
            cy.get(AddPanel.dropdownItemBlocks).click() // reset to blocks
            cy.wait('@addPanel')
            cy.get(Block.tile('faq')).scrollIntoView().click('bottom')

        })
        it('adds the first entry', () => {
            // fix for some browser being slow to load the template
            cy.wait(100)
            cy.get(Block.dialog + ' ' + Form.text('linkTitle\\[\\]') + ':last').scrollIntoView().type('FAQ Link Title 1')
            cy.get(Block.dialog + ' ' + Form.text('title\\[\\]') + ':last').scrollIntoView().type('FAQ Title 1')
            cy.get(Block.dialog + ' ' + Form.richTextArea('description\\[\\]') + ':last').scrollIntoView().click('bottom').type('FAQ Description 1{shift}{enter}Extra Details...{shift}{enter}..go here...')
        })
        it('adds the second entry', () => {
            cy.get(Block.dialog + ' div.ccm-faq-block-container > button.btn-success.ccm-add-faq-entry').click()
            cy.get(Block.dialog + ' ' + Form.text('linkTitle\\[\\]')).last().scrollIntoView().type('FAQ Link Title 2')
            cy.get(Block.dialog + ' ' + Form.text('title\\[\\]')).last().scrollIntoView().type('FAQ Title 2')
            cy.get(Block.dialog + ' ' + Form.richTextArea('description\\[\\]')).last().scrollIntoView().click('bottom').type('FAQ Description 2{shift}{enter}Extra Details...{shift}{enter}..go here...')
        })
        it('validates the block', () => {
            cy.saveBlock()
            cy.get(Area.zone('Main') + ' div.ccm-faq-container').should('be.visible')
            cy.get(Area.zone('Main') + ' div.ccm-faq-container > div.ccm-faq-block-links > a').contains('FAQ Link Title 1').should('be.visible')
            cy.get(Area.zone('Main') + ' div.ccm-faq-container > div.ccm-faq-block-links > a').contains('FAQ Link Title 2').should('be.visible')
            cy.get(Area.zone('Main') + ' div.ccm-faq-container > div.ccm-faq-block-entries > div.ccm-faq-entry-content > h3').contains('FAQ Title 1').should('be.visible')
            cy.get(Area.zone('Main') + ' div.ccm-faq-container > div.ccm-faq-block-entries > div.ccm-faq-entry-content > h3').contains('FAQ Title 2').should('be.visible')
            cy.get(Area.zone('Main') + ' div.ccm-faq-container > div.ccm-faq-block-entries > div.ccm-faq-entry-content > p').contains('FAQ Description 1').should('be.visible')
            cy.get(Area.zone('Main') + ' div.ccm-faq-container > div.ccm-faq-block-entries > div.ccm-faq-entry-content > p').contains('FAQ Description 2').should('be.visible')


        })
        it('removes the entries', () => {
            cy.get(Area.zone('Main') + '  div[data-block-type-handle="faq"]').click()
            cy.get(Block.popupEdit).click('bottom')
            cy.on('window:confirm', () => true);
            cy.get(Block.dialog + '  div.ccm-faq-block-container div.ccm-faq-entry:first button.ccm-delete-faq-entry').scrollIntoView().click('bottom')
            cy.get(Block.dialog + '  div.ccm-faq-block-container div.ccm-faq-entry:first button.ccm-delete-faq-entry').scrollIntoView().click('bottom')
            cy.saveBlock()
            cy.get(Area.zone('Main') + ' div.ccm-faq-container > div.ccm-faq-block-links > p').contains('No Faq Entries Entered.')

        })
        it('deletes the block', () => {
            cy.get(Area.zone('Main') + '  div[data-block-type-handle="faq"]').click()
            cy.deleteBlock()
        })
    })

    describe('testing RSS Displayer block', () => {
        it('adds the RSS Displayer to block to main area', () => {

            cy.get(Area.zoneHandle('Main')).click('bottom')
            cy.get(Area.popoverMenuAddBlock).click('bottom')
            cy.get(AddPanel.dropdownToggle).should('be.visible').click()
            cy.intercept(AddPanel.genericLink).as('addPanel')
            cy.get(AddPanel.dropdownItemBlocks).click() // reset to blocks
            cy.wait('@addPanel')
            cy.get(Block.tile('rss_displayer')).scrollIntoView().click('bottom')

        })
        it('sets the feed url', () => {

            cy.get(Block.dialog + ' ' + Form.text('url') + ':last').scrollIntoView().type('https://www.feedforall.com/sample.xml')

        })
        it('sets the title', () => {
            cy.get(Block.dialog + ' ' + Form.input('title') + ':last').scrollIntoView().type('Test Feed')
            cy.get(Block.dialog + ' ' + Form.select('titleFormat')).select('h2')
        })
        it('sets the date format', () => {
            cy.get(Block.dialog + ' ' + Form.select('standardDateFormat')).select(':custom:')
            cy.get(Block.dialog + ' ' + Form.text('customDateFormat') + ':last').scrollIntoView().type('Y/m/d')
        })
        it('sets the items', () => {
            cy.get(Block.dialog + ' ' + Form.input('itemsToDisplay') + ':last').scrollIntoView().clear().type('4')
        })

        it('validates the block', () => {
            cy.saveBlock()
            cy.get(Area.zone('Main') + ' div.ccm-block-rss-displayer-wrapper > div.ccm-block-rss-displayer').as('rss-wrapper').should('be.visible')
            cy.get('@rss-wrapper').find('div.ccm-block-rss-displayer-header h2').should('be.visible').contains('Test Feed')
            cy.get('@rss-wrapper').find('div.ccm-block-rss-displayer-item').should('have.length', '4')
            cy.get('@rss-wrapper').find('div.ccm-block-rss-displayer-item-date').first().contains('2004/10/') // because japan / america timezones...
        })
        it('deletes the block', () => {
            cy.get(Area.zone('Main') + '  div[data-block-type-handle="rss_displayer"]').click()
            cy.deleteBlock()
        })
    })

    describe('removes the edits', () => {
        it('discard the draft', () => {
            cy.get(Toolbar.pageSettings).click()
            cy.on('window:confirm', () => true)
            cy.get(Composer.discard).click('bottom')
        })
    })
})