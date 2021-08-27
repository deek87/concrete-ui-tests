import { Composer } from "../../support/locators/composer"
import { CheckInPanel, ckEditor, PageSettings, SitemapPanel, Toolbar } from "../../support/locators/edit"
import { Dialog, Notification } from "../../support/locators/core"

describe('Adding a page via composer', () => {
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


    it('visits the home page', () => {
        cy.visit('/')
    })

    describe('Add a blog entry via composer', () => {
        it('opens the sitemap', () => {
            cy.get(Toolbar.addPage).click()
            cy.wait(100) // wait for the nodes to populate
        })
        it('clicks the blog type', () => {
            cy.get(SitemapPanel.createPageLink).should('have.length.at.least', 1)
            cy.intercept(/.*\/ccm\/system\/tree\/node\/load_starting.*/).as('loadStart')
            cy.get(SitemapPanel.createPageLink).contains('Blog Entry').scrollIntoView().click({ force: true }) // sometimes the tooltip hides part of this -_-
            cy.wait('@loadStart')

        })
    })
    describe('Enters the details of the blog entry', () => {

        it('enters the name of the blog', () => {
            cy.get(Composer.text('name')).type('testing blog entry', { scrollBehavior: 'bottom' })
        })
        it('enters the url of the blog', () => {
            cy.wait(100) // wait for the js to autofill
            cy.get(Composer.text('url_slug')).scrollIntoView({ easing: "linear", duration: 1, offset: { top: -200, left: 0 } }).clear({ scrollBehavior: 'bottom' }).type('test-blog-entry', { scrollBehavior: 'bottom' })
        })
        it('enters a short description', () => {
            cy.get(Composer.textArea('description')).scrollIntoView({ easing: "linear", duration: 1, offset: { top: -200, left: 0 } }).type('This is an example description{enter}If you would like to know more{enter}Vist concrete5.co.jp', { scrollBehavior: 'bottom' })
        })
        it('selects the topic', () => {
            cy.intercept(/.*\/ccm\/system\/tree\/node\/load\?treeNodeParentID=[\d]+.*/).as('loadingSubNodes')
            cy.get(Composer.topicTree(29)).scrollIntoView()
            cy.get(Composer.topicTreeLink(29) + '>span.fancytree-title').contains('Reviews').then(($review) => {
                $review.parent().find('span[role=button]').trigger('click')
            })
            cy.wait('@loadingSubNodes').its('response.statusCode').should('eq', 200)
            cy.wait(100) // wait for the nodes to populate
            cy.get(Composer.topicTreeLink(29) + '>span.fancytree-title').contains('Movies').then(($review) => {
                $review.parent().find('span[role=checkbox]').trigger('click')
            })
        })
        it('enters the blog content', () => {
            cy.get(Composer.richTextArea('content')).then($content => {
                $content.next().trigger('click')
                cy.get(Composer.form + ' div[id="' + $content.next().attr('id') + '"]').find('div[role=textbox]').as('ckEditor')
            }).scrollIntoView()
            cy.get('@ckEditor').click()
            cy.get(ckEditor.boldButton).scrollIntoView().click({ scrollBehavior: 'center' })
            cy.get('@ckEditor').click().type('Hello World', { scrollBehavior: 'center' })
            cy.get(ckEditor.boldButton).click({ scrollBehavior: 'center' })
            cy.get('@ckEditor').type('{enter}', { scrollBehavior: 'center' })
            cy.get(ckEditor.italicButtonOff).click({ scrollBehavior: 'center' })
            cy.get('@ckEditor').type('Hello World ITALIC', { scrollBehavior: 'center' })
            cy.get(ckEditor.italicButtonOn).click({ scrollBehavior: 'center' })
            cy.get('@ckEditor').type('{enter}', { scrollBehavior: 'center' })
            cy.get(ckEditor.underlineButtonOff).click({ scrollBehavior: 'center' })
            cy.get('@ckEditor').type('Hello World', { scrollBehavior: 'center' })
            cy.get(ckEditor.underlineButtonOn).click({ scrollBehavior: 'center' })
            cy.get('@ckEditor').type('{enter}', { scrollBehavior: 'center' })
        })
        it('publishes the blog', () => {
            cy.get(Composer.publish).click()
        })
        it('visits the blog', () => {
            cy.visit('/blog/test-blog-entry')
        })
    })
})

describe('Editing a page via composer', () => {
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


    it('visits the test blog', () => {
        cy.visit('/blog/test-blog-entry')
        cy.title().should('contain', 'testing blog entry')
    })

    describe('Open the composer editor', () => {
        it('opens the page settings', () => {
            cy.intercept(/.*\/ccm\/system\/tree\/node\/load_starting.*/).as('loadStart')
            cy.get(Toolbar.pageSettings).click()
            cy.wait('@loadStart')
        })
    })
    describe('Enters the details of the blog entry', () => {

        it('enters the name of the blog', () => {

            cy.get(Composer.text('name')).clear({ scrollBehavior: 'bottom' }).type('testing blog entry - edited', { scrollBehavior: 'bottom' })
        })
        it('enters a short description', () => {
            cy.get(Composer.textArea('description')).scrollIntoView({ easing: "linear", duration: 1, offset: { top: -200, left: 0 } }).type('This is an example description{enter}If you would like to know more{enter}Vist concrete5.co.jp', { scrollBehavior: 'bottom' })
        })
        it('changes topic', () => {

            cy.get(Composer.topicTree(29)).scrollIntoView()

            cy.get(Composer.topicTreeLink(29) + '>span.fancytree-title').contains('Sports').then(($review) => {
                $review.parent().find('span[role=checkbox]').trigger('click')
            })
        })
        it('enters the blog content', () => {
            cy.get(Composer.richTextArea('content')).then($content => {
                $content.next().trigger('click')
                cy.get(Composer.form + ' div[id="' + $content.next().attr('id') + '"]').find('div[role=textbox]').as('ckEditor')
            }).scrollIntoView()
            cy.get('@ckEditor').click({ scrollBehavior: 'center' }).clear({ scrollBehavior: 'center' })
            cy.get(ckEditor.boldButton).scrollIntoView().click({ scrollBehavior: 'center' })
            cy.get('@ckEditor').click().type('Hello World EDITED', { scrollBehavior: 'center' })
            cy.get(ckEditor.boldButton).click({ scrollBehavior: 'center' })
            cy.get('@ckEditor').type('{enter}', { scrollBehavior: 'center' })
            cy.get(ckEditor.italicButtonOff).click({ scrollBehavior: 'center' })
            cy.get('@ckEditor').type('Hello World ITALIC', { scrollBehavior: 'center' })
            cy.get(ckEditor.italicButtonOn).click({ scrollBehavior: 'center' })
            cy.get('@ckEditor').type('{enter}', { scrollBehavior: 'center' })
            cy.get(ckEditor.underlineButtonOff).click({ scrollBehavior: 'center' })
            cy.get('@ckEditor').type('Hello World', { scrollBehavior: 'center' })
            cy.get(ckEditor.underlineButtonOn).click({ scrollBehavior: 'center' })
            cy.get('@ckEditor').type('{enter}', { scrollBehavior: 'center' })
        })
        it('saves the new version', () => {
            cy.get(Composer.preview).click()
            cy.wait(1000)

        })
        it('visits the blog', () => {
            cy.visit('/blog/test-blog-entry')

            cy.get(Toolbar.bar).then(($bar => {
                let checkIn = $bar.find('li[data-guide-toolbar-action="check-in"] a[data-toolbar-action="check-in"]')
                if (checkIn && checkIn.length > 0) {
                    cy.wrap(checkIn).click()
                    cy.get(CheckInPanel.save).click()

                }
            }))
            cy.get(Notification.infoPrimaryButton).should('be.visible')
            cy.title().should('contain', 'testing blog entry - edited')
        })
        it('deletes the blog', () => {
            cy.get(Toolbar.pageSettings).click()
            cy.get(PageSettings.deletePage).scrollIntoView().click()
            cy.get(Dialog.dangerButton).scrollIntoView().click()
            cy.visit('/blog/test-blog-entry', { failOnStatusCode: false })
            cy.get('.ccm-page').contains('404')
        })
    })
})