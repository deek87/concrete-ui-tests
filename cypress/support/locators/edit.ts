export class ckEditor {
    static saveButton: string = 'span[role="presentation"]>a.cke_button__concrete_save>span.cke_button_label.cke_button__concrete_save_label'
    static cancelButton: string = 'a.cke_button__concrete_cancel>span.cke_button_label.cke_button__concrete_cancel_label'
    static boldButton: string = 'a.cke_button__bold>span.cke_button_icon.cke_button__bold_icon'
    static boldButtonOff: string = 'a.cke_button__bold>span.cke_button_icon.cke_button__bold_icon'
    static boldButtonOn: string = 'a.cke_button__bold>span.cke_button_icon.cke_button__bold_icon'
    static activeButton: string = 'a.cke_button.cke_button_on'
    static italicButton: string = 'a.cke_button__italic>span.cke_button_icon.cke_button__italic_icon'
    static italicButtonOff: string = 'a.cke_button__italic.cke_button_off>span.cke_button_icon.cke_button__italic_icon'
    static italicButtonOn: string = 'a.cke_button__italic.cke_button_on>span.cke_button_icon.cke_button__italic_icon'
    static underlineButton: string = 'a.cke_button__underline>span.cke_button_icon.cke_button__underline_icon'
    static underlineButtonOff: string = 'a.cke_button__underline.cke_button_off>span.cke_button_icon.cke_button__underline_icon'
    static underlineButtonOn: string = 'a.cke_button__underline.cke_button_on>span.cke_button_icon.cke_button__underline_icon'
    static strikeButton: string = 'a.cke_button__strike>span.cke_button_icon.cke_button__strike_icon'
    static strikeButtonOff: string = 'a.cke_button__strike.cke_button_off>span.cke_button_icon.cke_button__strike_icon'
    static strikeButtonOn: string = 'a.cke_button__strike.cke_button_on>span.cke_button_icon.cke_button__strike_icon'
    static subscriptButton: string = 'a.cke_button__subscript>span.cke_button_icon.cke_button__subscript_icon'
    static subscriptButtonOff: string = 'a.cke_button__subscript.cke_button_off>span.cke_button_icon.cke_button__subscript_icon'
    static subscriptButtonOn: string = 'a.cke_button__subscript.cke_button_on>span.cke_button_icon.cke_button__subscript_icon'
    static superscriptButton: string = 'a.cke_button__superscript>span.cke_button_icon.cke_button__superscript_icon'
    static superscriptButtonOff: string = 'a.cke_button__superscript.cke_button_off>span.cke_button_icon.cke_button__superscript_icon'
    static superscriptButtonOn: string = 'a.cke_button__superscript.cke_button_on>span.cke_button_icon.cke_button__superscript_icon'
    static removeFormatButton: string = 'a.cke_button__removeformat>span.cke_button_icon.cke_button__removeformat_icon'
    static numberedListButton: string = 'a.cke_button__numberedlist>span.cke_button_icon.cke_button__numberedlist_icon'
    static numberedListButtonOff: string = 'a.cke_button__numberedlist.cke_button_off>span.cke_button_icon.cke_button__numberedlist_icon'
    static numberedListButtonOn: string = 'a.cke_button__numberedlist.cke_button_on>span.cke_button_icon.cke_button__numberedlist_icon'
    static bulletedListButton: string = 'a.cke_button__bulletedlist>span.cke_button_icon.cke_button__bulletedlist_icon'
    static bulletedListButtonOff: string = 'a.cke_button__bulletedlist.cke_button_off>span.cke_button_icon.cke_button__bulletedlist_icon'
    static bulletedListButtonOn: string = 'a.cke_button__bulletedlist.cke_button_on>span.cke_button_icon.cke_button__bulletedlist_icon'

    static justifyLeftButton: string = 'a.cke_button__justifyleft>span.cke_button_icon.cke_button__justifyleft_icon'
    static justifyLeftButtonOff: string = 'a.cke_button__justifyleft.cke_button_off>span.cke_button_icon.cke_button__justifyleft_icon'
    static justifyLeftButtonOn: string = 'a.cke_button__justifyleft.cke_button_on>span.cke_button_icon.cke_button__justifyleft_icon'

    static justifyRightButton: string = 'a.cke_button__justifyright>span.cke_button_icon.cke_button__justifyright_icon'
    static justifyRightButtonOff: string = 'a.cke_button__justifyright.cke_button_off>span.cke_button_icon.cke_button__justifyright_icon'
    static justifyRightButtonOn: string = 'a.cke_button__justifyright.cke_button_on>span.cke_button_icon.cke_button__justifyright_icon'

    static justifyCenterButton: string = 'a.cke_button__justifycenter>span.cke_button_icon.cke_button__justifycenter_icon'
    static justifyCenterButtonOff: string = 'a.cke_button__justifycenter.cke_button_off>span.cke_button_icon.cke_button__justifycenter_icon'
    static justifyCenterButtonOn: string = 'a.cke_button__justifycenter.cke_button_on>span.cke_button_icon.cke_button__justifycenter_icon'

    static justifyBlockButton: string = 'a.cke_button__justifyblock>span.cke_button_icon.cke_button__justifyblock_icon'
    static justifyBlockButtonOff: string = 'a.cke_button__justifyblock.cke_button_off>span.cke_button_icon.cke_button__justifyblock_icon'
    static justifyBlockButtonOn: string = 'a.cke_button__justifyblock.cke_button_on>span.cke_button_icon.cke_button__justifyblock_icon'

    static outdentButton: string = 'a.cke_button__outdent>span.cke_button_icon.cke_button__outdent_icon'
    static indentButton: string = 'a.cke_button__indent>span.cke_button_icon.cke_button__indent_icon'

    static linkButton: string = 'a.cke_button__link>span.cke_button_icon.cke_button__link_icon'
    static unlinkButtonDisabled: string = 'a.cke_button__unlink.cke_button_disabled>span.cke_button_icon.cke_button__unlink_icon'
    static unlinkButton: string = 'a.cke_button__unlink.cke_button_off>span.cke_button_icon.cke_button__unlink_icon'
    static anchorButton: string = 'a.cke_button__anchor>span.cke_button_icon.cke_button__anchor_icon'

    static sourceButton: string = 'a.cke_button__sourcedialog>span.cke_button_icon.cke_button__sourcedialog_icon'

    static undoButton: string = 'a.cke_button__undo>span.cke_button_icon.cke_button__undo_icon'
    static redoButton: string = 'a.cke_button__redo>span.cke_button_icon.cke_button__redo_icon'

    static customButton(buttonName: string) {
        buttonName = buttonName.replace('\s', '').toLowerCase()
        return 'a.cke_button__' + buttonName + '>span.cke_button_icon.cke_button__' + buttonName + '_icon'
    }
    static customButtonOn(buttonName: string) {
        buttonName = buttonName.replace('\s', '').toLowerCase()
        return 'a.cke_button__' + buttonName + '.cke_button_on>span.cke_button_icon.cke_button__' + buttonName + '_icon'
    }
    static customButtonOff(buttonName: string) {
        buttonName = buttonName.replace('\s', '').toLowerCase()
        return 'a.cke_button__' + buttonName + '.cke_button_off>span.cke_button_icon.cke_button__' + buttonName + '_icon'
    }
}

export class Toolbar {
    static addBlock: string = 'div[id="ccm-toolbar"] ul li[data-guide-toolbar-action="add-content"]>a'
    static pageSettings: string = 'div[id="ccm-toolbar"] ul li[data-guide-toolbar-action="page-settings"]>a'
    static editPage: string = 'div[id="ccm-toolbar"] ul li[data-guide-toolbar-action="edit-page"]>a'
    static checkOut: string = 'div[id="ccm-toolbar"] ul li[data-guide-toolbar-action="check-in"]>a'
    static logo: string = 'div[id="ccm-toolbar"]>ul>li.ccm-logo>img'
    static bar: string = 'div[id="ccm-toolbar"]'
    static search: string = 'div[id="ccm-toolbar"] ul li[data-guide-toolbar-action="intelligent-search"]>input'
    static help: string = 'div[id="ccm-toolbar"] ul li[data-guide-toolbar-action="help"]>a'
    static multilingual: string = 'div[id="ccm-toolbar"] ul li>a[data-launch-panel="page_relations"]'
    static addPage: string = 'div[id="ccm-toolbar"] ul li[data-guide-toolbar-action="sitemap"]>a'
    static dashboard: string = 'div[id="ccm-toolbar"] ul li[data-guide-toolbar-action="dashboard"]>a'
}

export class AddPanel {
    static base = 'div[id="ccm-panel-add-block"] section'
    static search = AddPanel.base + ' > div.ccm-panel-header-search > input'
    static dropdownBase = AddPanel.base + ' > header > div[id="dropdown-menu"]'
    static dropdownToggle = AddPanel.dropdownBase + ' h4[data-toggle="dropdown"]'
    static dropdownItemBlocks = AddPanel.dropdownBase + ' div.dropdown-menu>a[data-panel-dropdown-tab="blocks"]'
    static dropdownItemClipboard = AddPanel.dropdownBase + ' div.dropdown-menu>a[data-panel-dropdown-tab="clipboard"]'
    static dropdownItemStacks = AddPanel.dropdownBase + ' div.dropdown-menu>a[data-panel-dropdown-tab="stacks"]'
    static dropdownItemContainers = AddPanel.dropdownBase + ' div.dropdown-menu>a[data-panel-dropdown-tab="containers"]'
    static gridSwitcher = AddPanel.dropdownBase + ' > div.ccm-panel-header-list-grid-view-switcher'
    static dropdownItem(panel: string): string {
        switch (panel.toLowerCase()) {
            case 'clipboard':
                return this.dropdownItemClipboard
            case 'stacks':
                return this.dropdownItemStacks
            case 'containers':
                return this.dropdownItemContainers
            case 'blocks':
            default:
                return this.dropdownItemBlocks
        }
    }

    static blockSetBase = AddPanel.base + '>div.ccm-panel-content-inner[id="ccm-panel-add-blocktypes-list"]'
    static blockSetCollapseBase = AddPanel.blockSetBase + ' header[aria-controls="ccm-block-set-!NO!"]'
    static blockSetItemsBase = AddPanel.blockSetBase + ' div[id="ccm-block-set-!NO!"]'
    static blockMarketPlace = AddPanel.blockSetBase + ' div.ccm-marketplace-btn-wrapper>button'
    static allBlockTiles = AddPanel.blockSetBase + ' div.ccm-block-set ul li:visible'

    static blockSetCollapse(set_number: number) {
        if (set_number < 1) {
            throw new Error('invalid set number, must be greater than 0')
        }

        return this.blockSetCollapseBase.replace(/\!NO\!/ig, set_number.toString())
    }
    static blockSetItems(set_number: number) {
        if (set_number < 1) {
            throw new Error('invalid set number, must be greater than 0')
        }

        return this.blockSetItemsBase.replace(/\!NO\!/ig, set_number.toString())
    }
}

export class PageSettings {
    static base: string = 'div[id=ccm-panel-page] section'
    static baseMenuItem: string = PageSettings.base + ' > menu > li'
    static versions: string = PageSettings.baseMenuItem + ' > a[data-launch-sub-panel-url$="/ccm/system/panels/page/versions"]'
    static permissions: string = PageSettings.baseMenuItem + ' > a[data-launch-panel-detail="page-permissions"]'
    static attributes: string = PageSettings.baseMenuItem + ' > a[data-launch-panel-detail="page-attributes"]'
    static caching: string = PageSettings.baseMenuItem + ' > a[data-launch-panel-detail="page-caching"]'
    static mobilePreview: string = PageSettings.baseMenuItem + ' > a[data-launch-panel-detail="mobile-preview"]'
    static pagePreview: string = PageSettings.baseMenuItem + ' > a[data-launch-panel-detail="preview-page"]'
    static deletePage: string = PageSettings.baseMenuItem + ' > a.dialog-launch[href*="/ccm/system/dialgs/page/delete?cID"]'
    static pageVersionTable: string = PageSettings.base + '[id=ccm-panel-page-versions] > table'
    static pageVersionCount: string = PageSettings.pageVersionTable + ' > tbody > tr'
    static activePageVersion: string = PageSettings.pageVersionCount + '.ccm-panel-page-version-approved';
    static activePageVersionActionBase: string = PageSettings.activePageVersion + ' td.ccm-panel-page-versions-details > div.ccm-panel-page-versions-actions';
    static pageVersionActionBase: string = PageSettings.pageVersionCount + ' td.ccm-panel-page-versions-details > div.ccm-panel-page-versions-actions'
    static pageVersionMenu(version: number): string {
        if (version < 1) {
            throw new Error('invalid set number, must be greater than 0')
        }
        return PageSettings.pageVersionActionBase + ' > a[data-launch-versions-menu="ccm-panel-page-versions-version-menu-' + version + '"]'
    }
    static activePageVersionMenu: string = PageSettings.activePageVersionActionBase + ' a.ccm-panel-page-versions-menu-launcher'
}

export class CheckInPanel {
    static base: string = 'div[id="ccm-panel-check-in"] div.ccm-panel-content-inner>form'
    static comments: string = CheckInPanel.base + ' textarea[name="comments"]'
    static publishHolder: string = CheckInPanel.base + '>div.ccm-panel-check-in-publish'
    static publish: string = CheckInPanel.publishHolder + ' button[id="ccm-check-in-publish"]'
    static schedule: string = CheckInPanel.publishHolder + ' button[id="ccm-check-in-schedule"]'
    static scheduleHolder: string = CheckInPanel.publishHolder + '>div[id="ccm-check-in-schedule-wrapper"]';
    static scheduleFromEnableDisable: string = CheckInPanel.scheduleHolder + ' input[id=cvPublishDate_activate]'
    static scheduleFromDate: string = CheckInPanel.scheduleHolder + ' span[id=cvPublishDate_dw]'
    static scheduleToEnableDisable: string = CheckInPanel.scheduleHolder + ' input[id=cvPublishEndDate_activate]'
    static scheduleToDate: string = CheckInPanel.scheduleHolder + ' span[id=cvPublishEndDate_dw]'
    static save: string = CheckInPanel.base + ' button[id="ccm-check-in-preview"]'
    static discard: string = CheckInPanel.base + ' button[id="ccm-check-in-discard"]'
}

export class SitemapPanel {
    static base: string = 'div[id="ccm-panel-sitemap"] div.ccm-panel-content'
    static createPageLink: string = SitemapPanel.base + ' > section > menu > li > a'

    static createPageById(pageTypeId: number): string {
        return SitemapPanel.createPageLink + '[href$="/ccm/system/page/create/' + pageTypeId + '"]'
    }
}