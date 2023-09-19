import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'

export class ChatPage extends Block {
  constructor() {
    const onClickChat = (id: number): void => {
      this.setProps({ ...this.props, id })
    }

    super({
      id: undefined,
      chanels: [
        {
          id: '1',
          chanelName: 'Иван Иванов',
          lastMessageDate: '22.08.2023',
          lastMessage: 'Больше мне не пиши',
          unreadCount: 1,
          onClick: () => {
            onClickChat(1)
          }
        },
        {
          id: '2',
          chanelName: 'Генадий Генадьев',
          lastMessageDate: '24.08.2023',
          lastMessage: 'Привет',
          unreadCount: 999,
          onClick: () => {
            onClickChat(2)
          }
        }
      ],
      buttons: [
        {
          label: 'Профиль >',
          customClass: 'white-gray',
          onClick: (event: MouseEvent) => {
            changeUrl(event, 'profileView')
          }
        }
      ]
    })
  }

  protected render(): string {
    return `
    <div class="chat">
    <div class="chat-list-wrapper">
      <div class="chat-to-profile-button-wrapper">
        {{#each buttons}}
          {{{ Button label=this.label customClass=this.customClass onClick=onClick }}}
        {{/each}}
      </div>
      {{{ Search }}}
      <div class="chat-chanels">
        {{#if chanels}}
          {{#each chanels}}
            {{{ ChanelPreview chanelName=this.chanelName lastMessage=this.lastMessage lastMessageDate=this.lastMessageDate unreadCount=this.unreadCount onClick=onClick }}}
          {{/each}}
        {{else}}
          {{{ Empty }}}
        {{/if}}
      </div>
    </div>
      {{#if id}}
        <div class="chat-main">
          <div class="chat-main-header-wrapper">
            {{{ Avatar userName="Пользователь" }}}
          </div>
        </div>
      {{else}}
        {{{ Empty text='Выберите чат чтобы отправить сообщение' }}}
      {{/if}}
      </div>
    `
  }
}
