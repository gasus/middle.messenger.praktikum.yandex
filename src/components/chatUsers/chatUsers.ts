import Block from 'utils/Block'

export class ChatUsers extends Block {
  protected render(): string {
    return `
        <div class="chat-users-wrapper">
            <div class="chat-users-title">Пользователи в чате:</div>
            <div class="chat-users-content">
              {{#each chatUsers}}
                <div class="chat-user">{{this.login}}</div>
              {{/each}}
            </div>
        </div>
    `
  }
}
