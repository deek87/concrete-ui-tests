export class Dialog {
    static base: string = 'div.ui-dialog[role="dialog"]:last'
    static buttonWrapper: string = Dialog.base + ' div.ui-dialog-buttonpane'
    static primaryButton: string = Dialog.buttonWrapper + ' > .btn-primary:visible'
    static secondaryButton: string = Dialog.buttonWrapper + ' > .btn-secondary:visible'
    static dangerButton: string = Dialog.buttonWrapper + ' > .btn-danger:visible'
    static cancelButton: string = Dialog.buttonWrapper + '[data-dialog-action="cancel"]:visible'
}

export class Block {
    static tile(block_handle: string): string {
        return 'a[data-block-type-handle="' + block_handle + '"]'
    }
    static dialog: string = Dialog.base
    static draggedTile: string = 'a.ccm-block-edit-drag.ccm-panel-add-block-draggable-block-type'
    static addButton: string = Dialog.primaryButton
    static cancelButton: string = Dialog.secondaryButton

    static popupMenu: string = 'div[id="ccm-popover-menu-container"] > div[data-block-menu] > div.popover-inner > div.dropdown-menu:visible'
    static popupMenuItem: string = Block.popupMenu + ' > a'
    static popupEdit: string = Block.popupMenuItem + '[data-menu-action="block_dialog"][data-menu-href$="/ccm/system/dialogs/block/edit"]'
    static popupCopy: string = Block.popupMenuItem + '[data-menu-action="block_scrapbook"]'
    static popupDelete: string = Block.popupMenuItem + '[data-menu-action="delete_block"]'
    static popupDesign: string = Block.popupMenuItem + '[data-menu-action="block_design"]'
    static popupAdvanced: string = Block.popupMenuItem + '[data-menu-action="block_dialog"][data-menu-href$="/ccm/system/dialogs/block/cache"]'
    static popupPermissions: string = Block.popupMenuItem + '[data-menu-action="block_dialog"][data-menu-href$="/ccm/system/dialogs/block/permissions/list"]'
    static popupGuest: string = Block.popupMenuItem + '[data-menu-action="block_dialog"][data-menu-href$="/ccm/system/dialogs/block/permissions/guest_access"]'
    static designBase: string = 'form[id="ccm-inline-design-form"][data-target-element=block] ul.ccm-style-customizer-toolbar'
    static designTemplateList: string = Block.designBase + ' li.ccm-inline-toolbar-select button.dropdown-toggle'
    static designTemplateItem: string = Block.designBase + ' li.ccm-inline-toolbar-select div.dropdown-menu ul.dropdown-menu.inner li a[role=option] span'
    static designCancel: string = Block.designBase + '>li.ccm-inline-toolbar-button.ccm-inline-toolbar-button-cancel>input[type=button][data-action=cancel-design]'
    static designSave: string = Block.designBase + '>li.ccm-inline-toolbar-button.ccm-inline-toolbar-button-save>input[type=button][data-action=save-design]'
}




export class Form {
    static pageSelectorBase: string = 'div[data-concrete-page-input] > div.ccm-item-selector-group'
    static pageSelectorInput: string = Form.pageSelectorBase + ' > input'
    static pageSelectorInputName(name: string): string {
        return this.pageSelectorInput + '[name="' + name + '"]'
    }

    static fileSelectorBase: string = 'div[data-concrete-file-input] > div.ccm-item-selector-group'
    static fileSelectorInput: string = Form.fileSelectorBase + ' > input'
    static fileSelectorInputName(name: string): string {
        return this.fileSelectorInput + '[name="' + name + '"]'
    }
    static select(name: string): string {
        return 'div.form-group select.form-control[name="' + name + '"]'
    }
    static text(name: string): string {
        return 'div.form-group input[type="text"].form-control[name="' + name + '"]'
    }
    static input(name: string): string {
        return 'div.form-group input.form-control[name="' + name + '"]'
    }
    static number(name: string): string {
        return 'div.form-group input[type="number"].form-control[name="' + name + '"]'
    }
    static checkbox(name: string): string {
        return 'div.form-group input[type="checkbox"].form-check-input[name="' + name + '"]'
    }
    static richTextArea(name: string): string {
        return 'div.form-group textarea[name="' + name + '"] + div.cke div[contenteditable="true"]'
    }
    static textArea(name: string): string {
        return 'div.form-group textarea[name="' + name + '"]'
    }

}

export class Sitemap {
    static base: string = 'div.ccm-sitemap-wrapper'
    static treeSelector: string = Sitemap.base + ' div.ccm-sitemap-tree-selector-wrapper'
    static treeOpen: string = Sitemap.treeSelector + ' div.dropdown button'
    static list: string = ''
    static tree: string = Sitemap.base + ' div.ccm-sitemap-tree > ul'
    static treeItem: string = Sitemap.tree + ' li[role=treeitem] > span.fancytree-node'
    static treeLabel: string = Sitemap.treeItem + ' > span.fancytree-title'
}


export class PageSelect {
    static base: string = 'div[id="ccm-sitemap-search-selector"] div.container-fluid > div.row'
    static menuBase: string = PageSelect.base + ' > div.col-4.border-right > ul'
    static menuItem: string = PageSelect.menuBase + ' > li.nav-item > a.nav-link'
    static searchBase: string = PageSelect.base + ' div[data-concrete-page-chooser-search]'
    static searchForm: string = PageSelect.searchBase + ' form'
    static search: string = PageSelect.searchForm + ' div.ccm-header-search-form-input input[type=text]'
    static searchSubmit: string = PageSelect.searchForm + ' div.ccm-header-search-form-input button[type=submit]'
}

export class FileSelect {
    static base: string = 'div[data-choose="file-manager"] div.container-fluid > div.row '
    static menuBase: string = FileSelect.base + ' > div.col-4.border-right > ul'
    static menuItem: string = FileSelect.menuBase + ' > li.nav-item > a.nav-link'
    static header: string = FileSelect.base + ' header'
    static sort: string = FileSelect.header + '> button[type=button].float-right'
    static searchForm: string = FileSelect.base + 'div[id="search"] form'
    static search: string = FileSelect.searchForm + ' input[type=text]'
    static searchSubmit: string = FileSelect.searchForm + ' button[type=submit]'
    static fileRadio(file: number): string {
        return FileSelect.base + 'input[type=radio][id="file-' + file.toString() + '"]'
    }
    static gridBase: string = FileSelect.base + ' div.ccm-image-cell-grid'
    static gridLabel: string = FileSelect.gridBase + ' div.ccm-image-cell > div.ccm-image-cell-title label.form-check-label'
    static tableBase: string = FileSelect.base + ' table.ccm-image-chooser-list-view'
    static tableSortLabel: string = FileSelect.tableBase + ' thead > tr > th > a'
    static tableLabel: string = FileSelect.tableBase + ' tbody > tr >  td'
    static tableImage: string = FileSelect.tableLabel + '.ccm-image-chooser-icon img'
    static tableRadio: string = FileSelect.tableLabel + ' > input[type=radio]'
    static tableFolderImage: string = FileSelect.tableLabel + '.ccm-image-chooser-icon i.fa.fa-folder'
}

export class Area {

    static zoneBlank: string = 'div[data-area-handle="!AREA_HANDLE!"][data-area-display-name="!AREA_HANDLE!"]'
    static zoneSubZoneBlank: string = 'div[data-area-handle="!AREA_HANDLE!"][data-area-display-name="!AREA_HANDLE!"] div[data-area-display-name="!SUB_HANDLE!"]'
    static dragZoneLast: string = '>div.ccm-area-block-list> div[class="ccm-area-drag-area"]:last-child'
    static dragZoneFirst: string = '>div.ccm-area-block-list> div[class="ccm-area-drag-area"]:first-child'
    static zone(area: string = 'Main'): string {
        return this.zoneBlank.replace(/\!AREA_HANDLE\!/ig, area)
    }
    static zoneSubZone(area: string, sub_zone: string): string {
        return this.zoneSubZoneBlank.replace(/\!AREA_HANDLE\!/ig, area).replace(/\!SUB_HANDLE\!/ig, sub_zone)
    }

    static popoverMenuBase: string = 'div.popover[data-area-menu] > div.popover-inner > div.dropdown-menu:visible'
    static popoverMenuAddBlock: string = Area.popoverMenuBase + ' > a[data-menu-action="area-add-block"]'
    static popoverMenuEditDesign: string = Area.popoverMenuBase + ' > a[data-menu-action="edit-area-design"]'
    static popoverMenuAddLayout: string = Area.popoverMenuBase + ' > a[data-block-type-handle="core_area_layout"]'
    static popoverMenuPermissions: string = Area.popoverMenuBase + ' > a.dropdown-item.dialog-launch[href*="ccm/system/dialogs/area/edit/permissions"]'



    static subDragZone(area: string, sub_zone: string): string {
        return this.zoneSubZone(area, sub_zone) + this.dragZoneLast
    }
    static dragZone(area: string): string {
        return this.zone(area) + this.dragZoneLast
    }
    static zoneHandle(area: string = 'Main'): string {
        return this.zone(area) + '>div.ccm-area-footer.ccm-ui>div.ccm-area-footer-handle'
    }
    static zoneSubZoneHandle(area: string, sub_zone: string): string {
        return this.zoneSubZone(area, sub_zone) + '>div.ccm-area-footer.ccm-ui>div.ccm-area-footer-handle'
    }

}

export class Notification {
    static success: string = 'div[role="alertdialog"] > div.ccm-notification-success'
    static info: string = 'div[role="alertdialog"] > div.ccm-notification-info'
    static infoButtonContainer: string = Notification.info + ' > div.ccm-notification-content > div.ccm-notification-text > div.ccm-notification-inner-buttons'
    static infoPrimaryButton: string = Notification.infoButtonContainer + ' a.btn.btn-primary'
    static close: string = 'div[role="alertdialog"] div.ccm-notification-closer'

}

export class Dashboard {
    static content: string = 'div[id="ccm-dashboard-content"]'
    static contentFull: string = 'div[id="ccm-dashboard-content-full"]'
    static page: string = 'div[id="ccm-dashboard-page"]'
    static header: string = Dashboard.content + ' header'
    static bookmark: string = Dashboard.header + ' a[data-bookmark-action]'
    static bookmarkIcon: string = Dashboard.bookmark + ' svg.icon-bookmark'
    static bookmarkAdd: string = Dashboard.header + ' a[data-bookmark-action="add-favorite"]'
    static bookmarkRemove: string = Dashboard.header + ' a[data-bookmark-action="remove-favorite"]'
    static contentRegular: string = Dashboard.content + ' div[id="ccm-dashboard-content-regular"]'
    static panel: string = 'div[id="ccm-panel-dashboard"]'
    static panelContent: string = Dashboard.panel + ' div.ccm-panel-content.ccm-panel-content-visible:visible'
    static activeMenu: string = Dashboard.panelContent + ' div:visible > ul.nav.flex-column'
    static activeMenuItem: string = Dashboard.activeMenu + ' > li > a'
    static favouriteMenu: string = Dashboard.panelContent + ' menu.ccm-panel-dashboard-favorites-menu'
    static favouriteMenuItem: string = Dashboard.favouriteMenu + ' li'
    static dashboardPanelSelect: string = Dashboard.favouriteMenu + ' > li > a[id="panel-dashboard-dashboard"]'
    static favouritePanelSelect: string = Dashboard.favouriteMenu + ' > li > a[id="panel-dashboard-favorites"]'
    static favoritePanelSelect: string = Dashboard.favouriteMenu + ' > li > a[id="panel-dashboard-favorites"]' // American Spelling...
    static toolbar: string = Dashboard.page + ' div[id="ccm-toolbar"]' // The Dashboard toolbar is different from the normal ccm-toolbar -_-
    static toolbarItem: string = Dashboard.toolbar + ' > ul > li'
    static toolbarLogo: string = Dashboard.toolbarItem + '.ccm-logo img'
    static toolbarBackToSite: string = Dashboard.toolbarItem + ':nth-child(2) span'
    static toolbarSite: string = Dashboard.toolbarItem + ' div.ccm-menu-item-site-list-container'
    static toolbarHelp: string = Dashboard.toolbarItem + '[data-guide-toolbar-action="help"] > a'
    static toolbarSearch: string = Dashboard.toolbarItem + '.ccm-toolbar-search input[id="ccm-nav-intelligent-search"]'
    static toolbarPanel: string = Dashboard.toolbarItem + ' > a[data-launch-panel="dashboard"]'
    static toolbarAddPage: string = Dashboard.toolbarItem + ' > a[data-launch-panel="sitemap"]'

}

export class FileManager {
    static headerSearchBase: string = Dashboard.header + ' div.ccm-dashboard-header-search > div.ccm-header-search-form > form'
    static headerAdvancedSearch: string = FileManager.headerSearchBase + ' a[data-launch-dialog="advanced-search"]'
    static headerSearchInput: string = FileManager.headerSearchBase + ' input[type=search][id=keywords]'
    static headerSearchSubmit: string = FileManager.headerSearchBase + ' div.input-group-append > button[type=submit]'
    static headerMenu: string = Dashboard.header + ' div.ccm-dashboard-header-menu'
    static headerIcons: string = FileManager.headerMenu + ' ul.ccm-dashboard-header-icons'
    static maxItemsList: string = FileManager.headerMenu + ' div.form-inline > div.dropdown > button.btn.btn-secondary[type=button][data-toggle=dropdown]'
    static maxItemsItem: string = FileManager.maxItemsList + ' + ul.dropdown-menu.show > li[data-items-per-page]'
    static maxItems(maxItems: number): string {
        return FileManager.maxItemsList + ' + ul.dropdown-menu.show > li[data-items-per-page="' + maxItems.toString() + '"]'
    }
    static headerJumpFolder: string = FileManager.headerIcons + ' > li > a[data-launch-dialog="navigate-file-manager"]'
    static headerNewFolder: string = FileManager.headerIcons + ' > li > a[data-launch-dialog="add-file-manager-folder"]'
    static headerUploadFile: string = FileManager.headerIcons + ' > li > a[data-launch-dialog="ccm-file-manager-upload"]'

    static jumpContainer: string = Dialog.base + ' div[data-select="file-manager-navigation"]'
    static treeItem: string = FileManager.jumpContainer + ' li[role=treeitem] > span.fancytree-node'
    static treeLabel: string = FileManager.treeItem + ' > span.fancytree-title'

    static addFolderPopupBase: string = Dialog.base + ' form[data-dialog-form="add-file-folder-node"]'
    static addFolderPopupName: string = FileManager.addFolderPopupBase + ' input[type=text][id=fileFolderName]'
    static addFolderStorage: string = FileManager.addFolderPopupBase + ' select[id=fileFolderFileStorageLocation]'

    static searchResultsContainer: string = Dashboard.contentFull + ' div[id=ccm-search-results-table]'
    static searchResults: string = FileManager.searchResultsContainer + ' > table[data-search-results="files]'
    static resultRow: string = FileManager.searchResults + ' tbody> tr[data-details-url]'
    static resultName: string = FileManager.resultRow + ' > td.ccm-search-results-name'
    static resultCheckbox: string = FileManager.resultRow + ' > td.ccm-search-results-checkbox'
    static resultIcon: string = FileManager.resultRow + ' > td.ccm-search-results-icon'
    static resultFavourite: string = FileManager.resultRow + ' > td.ccm-search-results-favorite-switcher'
    static resultFavorite: string = FileManager.resultFavourite
    static resultMenu: string = FileManager.resultRow + ' > td.ccm-search-results-menu-launcher'

    static dropzoneFileInput: string = FileManager.searchResultsContainer + ' input[type=file].ccm-file-uploader-container-dropzone-file-element'
    static pagination: string = FileManager.searchResultsContainer + ' + div.ccm-search-results-pagination ul.pagination'
    static paginationItem: string = FileManager.pagination + ' > li.page-item'
    static paginationPrev: string = FileManager.paginationItem + '.prev'
    static paginationNext: string = FileManager.paginationItem + '.next'
    static paginationActive: string = FileManager.paginationItem + '.active'

}
