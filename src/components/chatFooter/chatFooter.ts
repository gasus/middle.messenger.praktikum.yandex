import Block from 'utils/Block'

export class ChatFooter extends Block {
  constructor() {
    super({
      onChange: () => {
        const value = (this?.refs?.chatInput?.element as HTMLInputElement)
          ?.value
        this.refs.sendButton.setProps({
          ...this.refs.sendButton.props,
          disabled: !value
        })
      },
      onClick: (event: MouseEvent) => {
        event.preventDefault()

        const value = (this?.refs?.chatInput?.element as HTMLInputElement)
          ?.value
        console.log(value)
      }
    })
  }

  protected render(): string {
    return `
      <div class="chat-footer">
        {{{ ButtonPaperclip }}}
        {{{ ChatInput ref='chatInput' onChange=onChange message=message }}}
        {{{ ButtonCircleWithArrow ref='sendButton' onClick=onClick disabled='true' }}}
      </div>
    `
  }
}
