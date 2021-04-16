export class Composer {
    static base: string = 'div[id="ccm-panel-detail-page-composer"] section';
    static form: string = 'form[data-panel-detail-form="compose"]'
    static textArea(name: string): string {
        return Composer.form + ' textarea[id$="\\[' + name + '\\]"][name$="\\[' + name + '\\]"]'
    }
    static richTextArea(name: string): string {
        return Composer.form + ' textarea[name$="\\[' + name + '\\]"]'
    }
    static text(name: string): string {
        return Composer.form + ' input[type=text][id$="\\[' + name + '\\]"][name$="\\[' + name + '\\]"]'
    }
    static topicTree(id: number): string {
        return Composer.form + ' div.ccm-topic-attribute-wrapper > div.topics_' + id + ' > div > ul'
    }
    static topicTreeLink(id: number): string {
        return Composer.form + ' div.ccm-topic-attribute-wrapper > div.topics_' + id + ' > div > ul li[role=treeitem]>span.fancytree-node'
    }
    static formButtons: string = Composer.base + '>div.ccm-panel-detail-form-actions.dialog-buttons'
    static publish: string = Composer.formButtons + ' button[data-page-type-composer-form-btn="publish"]'
    static schedule: string = Composer.formButtons + ' button[data-page-type-composer-form-btn="schedule"]'
    static preview: string = Composer.formButtons + ' button[data-page-type-composer-form-btn="preview"]'
    static editMode: string = Composer.preview
    static discard: string = Composer.formButtons + ' button[data-page-type-composer-form-btn="discard"]'
    static save: string = Composer.formButtons + ' button[data-page-type-composer-form-btn="exit"]'
    static exit: string = Composer.formButtons + ' button[data-page-type-composer-form-btn="exit"]'
}