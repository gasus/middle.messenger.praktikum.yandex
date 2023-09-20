import Block from 'utils/Block'

export class Message extends Block {
  protected render(): string {
    return `
        <div
        {{#if isUser}}
          class="message-from-user-wrapper"
        {{else}}
          class="message-wrapper"
        {{/if}}
        >
          <div class="message">
            <div class="message-text">{{message}}<div>
            <div class="message-time">{{time}}<div>
          </div>
        </div>
    `
  }
}
