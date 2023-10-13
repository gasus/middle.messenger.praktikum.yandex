import ChatsApi from 'api/chats'
import {
  type ChatRemoveUserForm,
  type ChatAddUserForm,
  type ChatCreateForm,
  type ChatPreview
} from 'types/Chats'
import { showError } from 'utils/showError'

const chatsApi = new ChatsApi()

const getChats = async (): Promise<ChatPreview> => {
  const response = await chatsApi.chats()

  if (response.status !== 200) {
    throw Error(response.reason)
  }

  const chatsRaw = JSON.parse(response.response)
  const chats = chatsRaw.map((i: ChatPreview) => ({
    ...i,
    last_message: {
      ...i?.last_message,
      user: {
        ...i?.last_message?.user,
        avatar: `https://ya-praktikum.tech/api/v2/resources${i?.last_message?.user.avatar}`
      }
    }
  }))

  window.store.set({ chats })
  return chats
}

const addChat = async (form: ChatCreateForm): Promise<void> => {
  const response = await chatsApi.create(form)

  if (response.status !== 200) {
    showError(response)
  }

  void getChats()
}

const addUserToChat = async (data: ChatAddUserForm): Promise<void> => {
  const response = await chatsApi.addUser(data)

  if (response.status !== 200) {
    showError(response)
  }

  void getChats()
}

const removeUserFromChat = async (data: ChatRemoveUserForm): Promise<void> => {
  const response = await chatsApi.removeUser(data)

  if (response.status !== 200) {
    showError(response)
  }

  void getChats()
}

export { getChats, addChat, addUserToChat, removeUserFromChat }
