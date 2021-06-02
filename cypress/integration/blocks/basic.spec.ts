///<reference types="cypress" />

import { Composer } from "../../support/locators/composer"
import { Area, Block, Dialog, FileSelect, Form, Notification } from "../../support/locators/core"
import { AddPanel, ckEditor, SitemapPanel, Toolbar } from "../../support/locators/edit"

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
            cy.intercept('*ccm/system/panels/add*&tab=blocks').as('addPanel')
            cy.get(Area.popoverMenuAddBlock).click('bottom')
            cy.get(AddPanel.dropdownToggle).should('be.visible').click()
            cy.get(AddPanel.dropdownItemBlocks).click() // reset to blocks
            cy.wait('@addPanel')
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
                cy.get(Notification.close).click()
            })
        })


    })

    describe('testing html block', () => {
        it('adds the html to block to main area', () => {
            cy.get(Area.zoneHandle('Main')).click('bottom')
            cy.intercept('*ccm/system/panels/add*&tab=blocks').as('addPanel')
            cy.get(Area.popoverMenuAddBlock).click('bottom')
            cy.get(AddPanel.dropdownToggle).should('be.visible').click()
            cy.get(AddPanel.dropdownItemBlocks).click()
            cy.wait('@addPanel')
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

    describe('testing image block', () => {
        it('adds the image to block to main area', () => {
            cy.get(Area.zoneHandle('Page Footer')).click('bottom')
            cy.intercept('*ccm/system/panels/add*&tab=blocks').as('addPanel')
            cy.get(Area.popoverMenuAddBlock).click('bottom')
            cy.get(AddPanel.dropdownToggle).should('be.visible').click()
            cy.get(AddPanel.dropdownItemBlocks).click()
            cy.wait('@addPanel')
            cy.get(Block.tile('image')).click('bottom')
        })
        it('it adds an image from table view', () => {
            cy.fileManager('open')
            cy.get(FileSelect.menuItem).contains('File Manager').scrollIntoView().click()
            cy.get(FileSelect.sort).scrollIntoView().click()
            cy.fileManager('select', 'subway')
        })
        it('it adds a hover image from recent uploads', () => {
            cy.fileManager('open', 'fOnstateID')
            cy.get(FileSelect.menuItem).contains('File Manager').scrollIntoView().click()
            cy.fileManager('select', 'houses')
        })
        it('it adds an external link', () => {
            cy.get(Block.dialog + ' ' + Form.select('imageLink__which')).select('External URL')
            cy.get(Block.dialog + ' ' + Form.text('imageLink_external_url')).click('bottom').type('https://google.com')
            cy.get(Block.dialog + ' ' + Form.checkbox('openLinkInNewWindow')).click('bottom')

        })
        it('it adds alt text and a title', () => {
            cy.get(Block.dialog + ' ' + Form.text('altText')).click('bottom').type('A nice picture of the subway')
            cy.get(Block.dialog + ' ' + Form.text('title')).click('bottom').type('Subway TIME!')

            cy.intercept('*/ccm/system/block/render*').as('blockLoad')

            cy.get(Block.addButton).click()
            cy.wait('@blockLoad')
            cy.get(Notification.success).should('be.visible')
            cy.get(Notification.close).click()

        })
        it('validate images', () => {
            cy.get(Area.zone('Page Footer')).find('div[data-block-type-handle="image"] img').as('sourceImage').should('have.attr', 'data-hover-src')
            cy.get('@sourceImage').should('have.attr', 'data-default-src')
            cy.get('@sourceImage').then($src => {
                let picParent;
                if ($src.parent()[0].nodeName.toLowerCase() === 'picture') {
                    picParent = $src.parent().parent();
                } else {
                    picParent = $src.parent();
                }
                cy.wrap(picParent).should('have.attr', 'href').and('include', 'https://google.com')
                cy.wrap(picParent).should('have.attr', 'target').and('include', '_blank')
            })
        })
        it('reopens edit mode', () => {
            cy.get(Area.zone('Page Footer')).find('div[data-block-type-handle="image"] img').as('sourceImage').should('be.visible')
            cy.get('@sourceImage').then($src => {
                let picParent;
                if ($src.parent()[0].nodeName.toLowerCase() === 'picture') {
                    picParent = $src.parent().parent().parent();
                } else {
                    picParent = $src.parent().parent();
                }
                cy.wrap(picParent).click()
            })
            cy.get(Block.popupEdit).click('bottom')
            cy.get(Block.dialog).should('be.visible')
        })
        it('tests constrain image size and adds file link', () => {
            cy.get(Block.dialog).should('be.visible')
            cy.get(Block.dialog + ' ' + Form.checkbox('constrainImage')).scrollIntoView().click('bottom')
            cy.get(Block.dialog + ' ' + Form.number('maxWidth')).scrollIntoView().click('bottom').type('150')
            cy.get(Block.dialog + ' ' + Form.number('maxHeight')).scrollIntoView().click('bottom').type('150')
            cy.get(Block.dialog + ' ' + Form.select('imageLink__which')).scrollIntoView().select('File')
            cy.get(Block.dialog + ' ' + Form.checkbox('openLinkInNewWindow')).scrollIntoView().click('bottom')
            cy.intercept('*/ccm/system/file/get_json*').as('fileLoad')
            cy.fileManager('open', 'imageLink_file')
            cy.fileManager('search', 'bridge', true)
            cy.wait('@fileLoad')
            cy.intercept('*/ccm/system/block/render*').as('blockLoad')

            cy.get(Block.addButton).click()
            cy.wait('@blockLoad')
            cy.get(Notification.success).should('be.visible')
            cy.get(Notification.close).click()

        })
        it('validates the image size and file link', () => {
            cy.get(Area.zone('Page Footer')).find('div[data-block-type-handle="image"] img').as('sourceImage2')
            cy.get('@sourceImage2').then($src => {
                let picParent;
                if ($src.parent()[0].nodeName.toLowerCase() === 'picture') {
                    picParent = $src.parent().parent();
                } else {
                    picParent = $src.parent();
                }
                cy.wrap(picParent).should('have.attr', 'href').and('include', '/bridge')
                cy.wrap(picParent).should('not.have.attr', 'target')
            })
            cy.get('@sourceImage2').invoke('width').should('be.lte', 150)
            cy.get('@sourceImage2').invoke('height').should('be.lte', 150)
        })
        it('reopens edit mode', () => {
            cy.get(Area.zone('Page Footer')).find('div[data-block-type-handle="image"] img').as('sourceImage').should('be.visible')
            cy.get('@sourceImage').then($src => {
                let picParent;
                if ($src.parent()[0].nodeName.toLowerCase() === 'picture') {
                    picParent = $src.parent().parent().parent();
                } else {
                    picParent = $src.parent().parent();
                }
                cy.wrap(picParent).click()
            })
            cy.get(Block.popupEdit).click('bottom')
            cy.get(Block.dialog).should('be.visible')
        })

        it('tests constrain image size and page link', () => {
            cy.fileManager('clear', 'imageLink_file')
            cy.get(Block.dialog + ' ' + Form.select('imageLink__which')).scrollIntoView().select('Page')
            cy.intercept('*/ccm/system/page/sitemap_data*').as('loadSitemapData')
            cy.sitemap('open', 'imageLink_page');
            cy.wait('@loadSitemapData')
            cy.sitemap('select', 'Home')
            cy.get(Block.dialog + ' ' + Form.checkbox('cropImage')).click('bottom')
            cy.get(Block.dialog + ' ' + Form.number('maxWidth')).scrollIntoView().click('bottom').clear().type('200')
            cy.get(Block.dialog + ' ' + Form.number('maxHeight')).scrollIntoView().click('bottom').clear().type('200')
            cy.intercept('*/ccm/system/block/render*').as('blockLoad')

            cy.get(Block.addButton).click()
            cy.wait('@blockLoad')
            cy.get(Notification.success).should('be.visible')
            cy.get(Notification.close).click()
            cy.get(Area.zone('Page Footer')).find('div[data-block-type-handle="image"] img').as('sourceImage3')
            cy.get('@sourceImage3').then($src => {
                let picParent;
                if ($src.parent()[0].nodeName.toLowerCase() === 'picture') {
                    picParent = $src.parent().parent();
                } else {
                    picParent = $src.parent();
                }
                cy.wrap(picParent).should('not.have.attr', 'target')
            })
            cy.get('@sourceImage3').invoke('width').should('equal', 200)
            cy.get('@sourceImage3').invoke('height').should('equal', 200)
        })


    })

    describe('testing file block', () => {
        it('adds the file to block to main area', () => {
            cy.get(Area.zoneHandle('Main')).click('bottom')
            cy.intercept('*ccm/system/panels/add*&tab=blocks').as('addPanel')
            cy.get(Area.popoverMenuAddBlock).click('bottom')
            cy.get(AddPanel.dropdownToggle).should('be.visible').click()
            cy.get(AddPanel.dropdownItemBlocks).click()
            cy.wait('@addPanel')
            cy.get(Block.tile('file')).click('bottom')
        })
        it('selects a file', () => {
            cy.get(Block.dialog).should('be.visible')
            cy.fileManager('open')
            cy.fileManager('select', 'balloon')
            cy.get(Block.dialog + ' ' + Form.text('fileLinkText')).scrollIntoView().click('bottom').type('Hello my ballon')
            cy.intercept('*/ccm/system/block/render*').as('blockLoad')

            cy.get(Block.addButton).click()
            cy.wait('@blockLoad')
            cy.get(Notification.success).should('be.visible')
            cy.get(Notification.close).click()
            cy.get(Area.zone('Main')).find('div.ccm-block-file a').as('fileBlock').should('have.attr', 'href').and('contain', '/download_file/')
            cy.get('@fileBlock').should('contain.text', 'Hello my ballon')
        })
        it('enables force download', () => {
            cy.get(Area.zone('Main')).find('div.ccm-block-file').should("be.visible").then($block => {
                cy.wrap($block.parent()).click()
            })
            cy.get(Block.popupEdit).click('bottom')
            cy.get(Block.dialog).should('be.visible')
            cy.get(Block.dialog + ' ' + Form.checkbox('forceDownload')).scrollIntoView().click('bottom')
            cy.intercept('*/ccm/system/block/render*').as('blockLoad')
            cy.get(Block.dialog + ' ' + Form.text('fileLinkText')).scrollIntoView().click('bottom').clear().type('Hello my ballon!!')
            cy.get(Block.addButton).click()
            cy.wait('@blockLoad')
            cy.get(Notification.success).should('be.visible')
            cy.get(Notification.close).click()
            cy.get(Area.zone('Main')).find('div.ccm-block-file a').as('fileBlock').should('have.attr', 'href').and('contain', '/download_file/force/')
            cy.get('@fileBlock').should('contain.text', 'Hello my ballon!!')
        })
        it('deletes the block', () => {
            cy.get(Area.zone('Main')).find('div.ccm-block-file').should("be.visible").then($block => {
                cy.wrap($block.parent()).click()
            })
            cy.get(Block.popupDelete).click()
            cy.get(Dialog.dangerButton).click()
        })

    })

    describe('testing hr block', () => {
        it('adds the hr to block to main area', () => {
            cy.get(Area.zoneHandle('Main')).click('bottom')
            cy.intercept('*ccm/system/panels/add*&tab=blocks').as('addPanel')
            cy.get(Area.popoverMenuAddBlock).click('bottom')
            cy.get(AddPanel.dropdownToggle).should('be.visible').click()
            cy.get(AddPanel.dropdownItemBlocks).click()
            cy.wait('@addPanel')
            cy.get(Block.tile('horizontal_rule')).click('bottom')
            cy.get(Notification.success).should('be.visible')
            cy.get(Notification.close).click()
        })
        it('copies the block', () => {
            cy.get(Area.zone('Main')).find('div[data-block-type-handle="horizontal_rule"] hr').should("be.visible").then($block => {
                cy.wrap($block.parent()).click()
            })
            cy.get(Block.popupCopy).click()
            cy.get(Notification.success).should('be.visible')
            cy.get(Notification.close).click()
            cy.get(Area.zoneHandle('Page Footer')).click('bottom')
            cy.get(Area.popoverMenuAddBlock).click('bottom')
            cy.intercept('*ccm/system/panels/add*&tab=clipboard').as('addPanel')
            cy.get(AddPanel.dropdownToggle).click()
            cy.get(AddPanel.dropdownItemClipboard).click()
            cy.wait('@addPanel')
            cy.get(AddPanel.base + ' div[id="ccm-clipboard-container"] div[data-block-type-handle="horizontal_rule"]:first').click()
            cy.get(Notification.success).should('be.visible')
            cy.get(Notification.close).click()
            cy.get(Area.zone('Page Footer')).find('div[data-block-type-handle="horizontal_rule"] hr').should("be.visible")

        })
        it('deletes the copy and clipboard', () => {
            cy.get(Area.zone('Page Footer')).find('div[data-block-type-handle="horizontal_rule"] hr').should("be.visible").then($block => {
                cy.wrap($block.parent()).click()
            })
            cy.get(Block.popupDelete).click()
            cy.get(Dialog.dangerButton).click()
            cy.get(Notification.success).should('be.visible')
            cy.get(Notification.close).click()
            cy.get(Toolbar.addBlock).click()
            cy.intercept('*ccm/system/panels/add*&tab=*').as('addPanel')
            cy.get(AddPanel.dropdownToggle).click()
            cy.get(AddPanel.dropdownItemClipboard).click()
            cy.wait('@addPanel')
            cy.get(AddPanel.base + ' div[id="ccm-clipboard-container"] div[data-block-type-handle="horizontal_rule"]:first button.ccm-delete-clipboard-item').click()
            cy.get(AddPanel.dropdownToggle).should('be.visible').click()
            cy.get(AddPanel.dropdownItemBlocks).click() // reset to blocks
            cy.wait('@addPanel')
            cy.get(Toolbar.addBlock).click()
        })
        it('deletes the block', () => {
            cy.get(Area.zone('Main')).find('div[data-block-type-handle="horizontal_rule"] hr').should("be.visible").then($block => {
                cy.wrap($block.parent()).click()
            })
            cy.get(Block.popupDelete).click()
            cy.get(Dialog.dangerButton).click()
            cy.get(Notification.success).should('be.visible')
            cy.get(Notification.close).click()
        })


    })

    describe('testing feature block', () => {
        it('adds the feature to block to main area', () => {
            cy.get(Area.zoneHandle('Page Footer')).click('bottom')
            cy.intercept('*ccm/system/panels/add*&tab=blocks').as('addPanel')
            cy.get(Area.popoverMenuAddBlock).click('bottom')
            cy.get(AddPanel.dropdownToggle).should('be.visible').click()
            cy.get(AddPanel.dropdownItemBlocks).click()
            cy.wait('@addPanel')
            cy.get(Block.tile('feature')).click('bottom')
        })
        it('it selects an icon', () => {
            cy.get(Block.dialog + ' ' + Form.select('icon')).select('fas fa-home')
            cy.get(Block.dialog + ' i.fa-home.fa-fas').should('be.visible')
        })
        it('it sets a title', () => {
            cy.get(Block.dialog + ' ' + Form.select('titleFormat')).select('h4')
            cy.get(Block.dialog + ' ' + Form.text('title')).click('bottom').type('Test Feature')
        })

        it('it enters a discription', () => {
            cy.get(Block.dialog + ' ' + Form.richTextArea('paragraph')).scrollIntoView().click().type('Test Description....{shift}{enter}YEAH!')
        })
        it('it adds a link', () => {
            cy.get(Block.dialog + ' ' + Form.select('linkType')).scrollIntoView().select('External URL')
            cy.get(Block.dialog + ' ' + Form.text('externalLink')).scrollIntoView().click('bottom').type('https://google.com')
            cy.intercept('*/ccm/system/block/render*').as('blockLoad')

            cy.get(Block.addButton).click()
            cy.wait('@blockLoad')
            cy.get(Notification.success).should('be.visible')
            cy.get(Notification.close).click()

        })
        it('validates the feature block', () => {
            cy.get('div.ccm-block-feature-item h4 i.fas.fa-home').should('be.visible')
            cy.get('div.ccm-block-feature-item h4 i.fas.fa-home + a').should('have.attr', 'href').and('include', 'https://google.com')
            cy.get('div.ccm-block-feature-item h4 + p').should('contain.text', 'Test Description....')
        })
        it('changes the design of the block', () => {

            cy.get(Area.zone('Page Footer') + ' div[data-block-type-handle="feature"]').click()
            cy.intercept('*/ccm/system/dialogs/block/design*').as('blockDesign');
            cy.get(Block.popupDesign).click()
            cy.wait('@blockDesign')
            cy.get(Block.designBase).should('be.visible')
            cy.get(Block.designTemplateList).click('bottom')
            cy.get(Block.designTemplateItem).contains('Hover Description').click()
            cy.intercept('*/ccm/system/block/render*').as('blockLoad')

            cy.get(Block.designSave).click()
            cy.wait('@blockLoad')
            cy.get(Notification.success).should('be.visible')
            cy.get(Notification.close).click()
            cy.get(Area.zone('Page Footer') + ' div[data-block-type-handle="feature"] > a').should('have.attr', 'href').and('include', 'https://google.com')
            cy.get(Area.zone('Page Footer') + ' div[data-block-type-handle="feature"] > a div.ccm-block-feature-item-hover-wrapper').should('have.attr', 'data-original-title').and('include', 'Test Description....')
            cy.get(Area.zone('Page Footer') + ' div[data-block-type-handle="feature"] > a div.ccm-block-feature-item-hover-wrapper > div.ccm-block-feature-item-hover-title').contains('Test Feature')
            cy.get(Area.zone('Page Footer') + ' div[data-block-type-handle="feature"] > a div.ccm-block-feature-item-hover-wrapper > div.ccm-block-feature-item-hover > div.ccm-block-feature-item-hover-icon > i').should('have.class', 'fa-home')
        })
        it('deletes the block', () => {
            cy.get(Area.zone('Page Footer') + ' div[data-block-type-handle="feature"]').click()
            cy.get(Block.popupDelete).click()
            cy.get(Dialog.dangerButton).click()
            cy.get(Notification.success).should('be.visible')
            cy.get(Notification.close).click()
        })

    })

    describe('removes the edits', () => {
        it('discard the draft', () => {
            cy.get(Toolbar.pageSettings).click()
            cy.on('window:confirm', () => true);
            cy.get(Composer.discard).click('bottom')
        })
    })

})