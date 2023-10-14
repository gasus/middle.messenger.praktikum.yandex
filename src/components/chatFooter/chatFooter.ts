import Block from 'utils/Block'

export class ChatFooter extends Block {
  protected render(): string {
    return `
      <div class="chat-footer">
        {{{ ButtonPaperclip }}}
        {{{ ChatInput ref='chatInput' onChange=onChange message=message }}}
      </div>
    `
  }
}
