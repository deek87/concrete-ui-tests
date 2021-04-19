export class Dialog {
    static base: string = 'div.ui-dialog[role="dialog"]:last'
    static buttonWrapper: string = Dialog.base + ' div.ui-dialog-buttonpane'
    static primaryButton: string = Dialog.buttonWrapper + ' > .btn-primary:visible'
    static secondaryButton: string = Dialog.buttonWrapper + ' > .btn-secondary:visible'
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

}




export class Form {
    static fileSelectorBase: string = 'div[data-concrete-file-input] > div.ccm-item-selector-group'
    static fileSelectorInput: string = Form.fileSelectorBase + ' > input'
    static fileSelectorInputName(name: string): string {
        return this.fileSelectorInput + '[name="' + name + '"]'
    }
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
    static zone(area: string): string {
        return this.zoneBlank.replace(/\!AREA_HANDLE\!/ig, area)
    }
    static zoneSubZone(area: string, sub_zone: string): string {
        return this.zoneSubZoneBlank.replace(/\!AREA_HANDLE\!/ig, area).replace(/\!SUB_HANDLE\!/ig, sub_zone)
    }

    static subDragZone(area: string, sub_zone: string): string {
        return this.zoneSubZone(area, sub_zone) + this.dragZoneLast
    }
    static dragZone(area: string): string {
        return this.zone(area) + this.dragZoneLast
    }
}

export class Notification {
    static success: string = 'div[role="alertdialog"] > div.ccm-notification-success'
    static info: string = 'div[role="alertdialog"] > div.ccm-notification-info'
    static infoButtonContainer: string = Notification.info + ' > div.ccm-notification-content > div.ccm-notification-text > div.ccm-notification-inner-buttons';
    static infoPrimaryButton: string = Notification.infoButtonContainer + ' a.btn.btn-primary';

}