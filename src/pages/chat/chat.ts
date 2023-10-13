import { addChat } from 'services/chats'
import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'
import { connect } from 'utils/connect'

class ChatPage extends Block {
  constructor() {
    const chats = window.store.getState().chats

    const chanelsDataWithClick = chats?.map((i) => {
      return {
        ...i,
        onClick: () => {
          this.setProps({
            ...this.props,
            id: i.id,
            chanelName: i.chanelName,
            messages: i.messages
          })
        }
      }
    })

    const modalInputs = {
      addChat: [
        {
          label: 'Название чата',
          ref: 'chat_name',
          name: 'chat_name',
          type: 'text'
        }
      ],
      addUser: [
        {
          label: 'Имя пользователя',
          ref: 'add_user_name',
          name: 'add_user_name',
          type: 'text'
        }
      ],
      removeUser: [
        {
          label: 'Имя пользователя',
          ref: 'remove_user_name',
          name: 'remove_user_name',
          type: 'text'
        }
      ]
    }

    const modalButtons = {
      addChat: [
        {
          label: 'Добавить',
          customClass: 'blue-white',
          onClick: () => {
            const title = this.refs.modalChat.refs.chat_name?.value()
            void addChat({ title })
            this.setProps({
              ...this.props,
              createChatVisibility: false
            })
          }
        }
      ],
      addUser: [
        {
          label: 'Добавить',
          customClass: 'blue-white',
          onClick: () => {
            // TODO
            this.setProps({
              ...this.props,
              modalVisibility: false
            })
          }
        }
      ],
      removeUser: [
        {
          label: 'Исключить',
          customClass: 'blue-white',
          onClick: () => {
            // TODO
            this.setProps({
              ...this.props,
              modalVisibility: false
            })
          }
        }
      ]
    }

    super({
      id: undefined,
      chanelName: undefined,
      modalVisibility: false,
      modalInputs: modalInputs.addChat,
      modalButtons: modalButtons.addChat,
      messages: [],
      chanels: chanelsDataWithClick,
      showModalAddUser: (event: MouseEvent) => {
        event.preventDefault()
        this.setProps({
          ...this.props,
          modalVisibility: true,
          modalInputs: modalInputs.addUser,
          modalButtons: modalButtons.addUser
        })
      },
      showModalRemoveUser: (event: MouseEvent) => {
        event.preventDefault()
        this.setProps({
          ...this.props,
          modalVisibility: true,
          modalInputs: modalInputs.removeUser,
          modalButtons: modalButtons.removeUser
        })
      },
      buttons: [
        {
          label: 'Создать чат',
          customClass: 'blue-white',
          onClick: (event: MouseEvent) => {
            event.preventDefault()
            this.setProps({
              ...this.props,
              modalVisibility: true,
              modalInputs: modalInputs.addChat,
              modalButtons: modalButtons.addChat
            })
          }
        },
        {
          label: 'Профиль >',
          customClass: 'white-gray',
          onClick: (event: MouseEvent) => {
            changeUrl({ event, path: 'profileView' })
          }
        }
      ]
    })
  }

  protected render(): string {
    return `
    <div class="chat">
    {{{ ModalChat ref='modalChat' modalVisibility=modalVisibility onClick=createChat inputs=modalInputs buttons=modalButtons }}}
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
            {{{ Avatar userName=chanelName smallRightUsername='true' }}}
            {{{ Button label='Добавить пользователя' customClass='blue-white' onClick=showModalAddUser }}}
            {{{ Button label='Исключить пользователя' customClass='blue-white' onClick=showModalRemoveUser }}}
          </div>
          <div class="chat-main-messages">
            {{#each messages}}
              {{{ Message message=this.message isUser=this.isUser time=this.time }}}
            {{/each}}
          </div>
          <div class="chat-main-footer">
            {{{ ChatFooter }}}
          </div>
        </div>
      {{else}}
        {{{ Empty text='Выберите чат чтобы отправить сообщение' }}}
      {{/if}}
      </div>
    `
  }
}

export default connect(({ chats }) => ({ chats }))(ChatPage)
