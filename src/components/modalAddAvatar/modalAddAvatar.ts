import Block from 'utils/Block'

export class ModalAddAvatar extends Block {
  public value(): File | undefined {
    return (this?.refs?.avatarInput?.element as HTMLInputElement)?.files?.[0]
  }

  protected render(): string {
    return `
        <div
        {{#if modalVisibility}}
        class='modal-wrapper modal-wrapper-visibility'
        {{else}}
        class='modal-wrapper'
        {{/if}}
        >
          <div class='modal'>
            <div class='modal-header'>
              Загрузите файл
            </div>
            {{{ ProfileAvatarInput
              ref="avatarInput"
            }}}
            {{{ Button label='Поменять' customClass='blue-white' onClick=updateAvatar }}}
          </div>
        </div>
    `
  }
}
