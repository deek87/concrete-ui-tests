export class Block {
    static tile(block_handle: string): string {
        return 'a[data-block-type-handle="' + block_handle + '"]'
    }
    static dialog: string = 'div.ui-dialog[role="dialog"]'
    static draggedTile: string = 'a.ccm-block-edit-drag.ccm-panel-add-block-draggable-block-type'

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