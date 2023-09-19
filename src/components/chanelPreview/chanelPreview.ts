import Block from 'utils/Block'

export class ChanelPreview extends Block {
  protected render(): string {
    return `
    <div class="chanel-preview-wrapper">
    <div class="chanel-preview-avatar">
      {{{ Avatar }}}
    </div>
    <div class="chanel-preview-message-wrapper">
      <div class="chanel-name">
        {{chanelName}}
      </div>
      <div class="chanel-preview-message">
        {{lastMessage}}
      </div>
    </div>
    <div class="chanel-preview-message-info-wrapper">
      <div class="chanel-preview-message-date">
        {{lastMessageDate}}
      </div>
      <div class="chanel-preview-unread-count">
        {{unreadCount}}
      </div>
    </div>
  </div>
    `
  }
}
