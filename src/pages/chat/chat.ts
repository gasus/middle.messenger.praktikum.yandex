import {
  addChat,
  addUserToChat,
  deleteChat,
  getChatUsers,
  getToken,
  removeUserFromChat
} from '../../services/chats'
import { type ChatPreview } from '../../types/Chats'
import Block from '../../utils/Block'
import ChatWebSocket from '../../utils/ChatWebSocket'
import { changeUrl } from '../../utils/changeUrl'
import { connect } from '../../utils/connect'

class ChatPage extends Block {
  constructor() {
    const chats = window.store.getState().chats

    const addToChatClick = (chats: ChatPreview[]): ChatPreview[] => {
      return chats?.map((i) => {
        return {
          ...i,
          onClick: async () => {
            await getToken(i.id).then((token) => {
              const userId = window.store.getState().user?.id
              const socket = new ChatWebSocket(userId, i.id, token)
              socket.create()
              this.setProps({
                ...this.props,
                chatId: i.id,
                chanelName: i.title,
                chanelAvatar: i.avatar,
                socket
              })
            })
            await getChatUsers(i.id).then((chatUsers) => {
              this.setProps({
                ...this.props,
                chatUsers
              })
            })
          }
        }
      })
    }

    const chanelsDataWithClick = addToChatClick(chats)

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
            void addChat({ title }).then((chats) => {
              this.setProps({
                ...this.props,
                modalVisibility: false,
                chanels: addToChatClick(chats)
              })
            })
          }
        },
        {
          label: 'Закрыть',
          customClass: 'red-white',
          onClick: () => {
            this.setProps({
              ...this.props,
              modalVisibility: false
            })
          }
        }
      ],
      addUser: [
        {
          label: 'Добавить',
          customClass: 'blue-white',
          onClick: async () => {
            const userLogin = this.refs.modalChat.refs.add_user_name?.value()
            await addUserToChat({
              chatId: this.props.chatId,
              login: userLogin
            })
            await getChatUsers(this.props.chatId).then((chatUsers) => {
              this.setProps({
                ...this.props,
                chatUsers
              })
            })
            this.setProps({
              ...this.props,
              modalVisibility: false
            })
          }
        },
        {
          label: 'Закрыть',
          customClass: 'red-white',
          onClick: () => {
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
          onClick: async () => {
            const userLogin = this.refs.modalChat.refs.remove_user_name?.value()
            console.log(userLogin)
            await removeUserFromChat({
              chatId: this.props.chatId,
              login: userLogin
            })
            await getChatUsers(this.props.chatId).then((chatUsers) => {
              this.setProps({
                ...this.props,
                chatUsers
              })
            })
            this.setProps({
              ...this.props,
              modalVisibility: false
            })
          }
        },
        {
          label: 'Закрыть',
          customClass: 'red-white',
          onClick: () => {
            this.setProps({
              ...this.props,
              modalVisibility: false
            })
          }
        }
      ]
    }

    super({
      chatId: undefined,
      chanelName: undefined,
      chanelAvatar: undefined,
      chatUsers: undefined,
      modalVisibility: false,
      modalInputs: modalInputs.addChat,
      modalButtons: modalButtons.addChat,
      chanels: chanelsDataWithClick,
      socket: undefined,
      removeChat: (event: MouseEvent) => {
        event.preventDefault()
        void deleteChat({ chatId: this.props.chatId }).then((chats) => {
          this.setProps({
            ...this.props,
            chatId: undefined,
            chanels: addToChatClick(chats)
          })
        })
      },
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
      onSend: () => {
        const element = this?.refs?.chatFooter?.refs?.chatInput
          ?.element as HTMLInputElement
        if (element?.value) {
          this.props.socket.send(element?.value)
          element.value = ''
        }
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
            changeUrl({ event, path: '/profileView' })
          }
        }
      ]
    })
  }

  protected render(): string {
    return `
    <div class="chat">
    {{{ ModalChat ref='modalChat' modalVisibility=modalVisibility inputs=modalInputs buttons=modalButtons }}}
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
            {{{ ChanelPreview chanelName=this.title lastMessage=this.last_message.content lastMessageDate=this.last_message.time avatarLink=this.avatar unreadCount=this.unread_count onClick=onClick }}}
          {{/each}}
        {{else}}
          {{{ Empty }}}
        {{/if}}
      </div>
    </div>
      {{#if chatId}}
        <div class="chat-main">
          <div class="chat-main-header-wrapper">
            {{{ Avatar userName=chanelName avatarLink=chanelAvatar smallRightUsername='true' }}}
            {{{ ChatUsers chatUsers=chatUsers }}}
            {{{ Button label='Удалить чат' customClass='red-white' onClick=removeChat }}}
            {{{ Button label='Добавить пользователя' customClass='blue-white' onClick=showModalAddUser }}}
            {{{ Button label='Исключить пользователя' customClass='blue-white' onClick=showModalRemoveUser }}}
          </div>
          <div class="chat-main-messages">
            {{#each messages}}
              {{{ Message message=this.content isUser=this.isUser time=this.time }}}
            {{/each}}
          </div>
          <div class="chat-main-footer">
            {{{ ChatFooter ref='chatFooter' onClick=onSend }}}
            {{{ ButtonCircleWithArrow ref='sendButton' onClick=onSend }}}
          </div>
        </div>
      {{else}}
        {{{ Empty text='Выберите чат чтобы отправить сообщение' }}}
      {{/if}}
      </div>
    `
  }
}

export default connect(({ chats, messages }) => ({ chats, messages }))(ChatPage)
