import Block from 'utils/Block'

export class ModalChat extends Block {
  public value(): File | undefined {
    return (this?.refs?.avatarInput?.element as HTMLInputElement)?.files?.[0]
  }

  protected render(): string {
    return `
        <div
        {{#if modalVisibility}}
          class='modal-chat-wrapper modal-chat-wrapper-visibility'
        {{else}}
          class='modal-chat-wrapper'
        {{/if}}
        >
          <div class='modal-chat'>
            {{#each inputs}}
              {{{ ProfileInputField label=this.label ref=this.name name=this.name value=this.value type=this.type disabled=this.disabled validate=this.validate }}}
            {{/each}}
            <div class='modal-chat-buttons'>
            {{#each buttons}}
              {{{ Button label=this.label customClass=this.customClass onClick=this.onClick }}}
            {{/each}}
            </div>
          </div>
        </div>
    `
  }
}
