import ChatsApi from 'api/chats'
import {
  type ChatCreateForm,
  type ChatPreview,
  type ChatAddUserPreForm,
  type ChatRemoveUserPreForm
} from 'types/Chats'
import { type User } from 'types/User'
import { showError } from 'utils/showError'
import { userSearch } from './user'

const chatsApi = new ChatsApi()

const getChats = async (): Promise<ChatPreview[]> => {
  const response = await chatsApi.chats()

  if (response.status !== 200) {
    throw Error(response.reason)
  }

  const chatsRaw = JSON.parse(response.response)
  const chats = chatsRaw.map((i: ChatPreview) => ({
    ...i,
    last_message: i?.last_message
      ? {
          ...i?.last_message,
          time: new Date(i?.last_message?.time)?.toLocaleString?.(),
          user: {
            ...i?.last_message?.user,
            avatar: `https://ya-praktikum.tech/api/v2/resources${i?.last_message?.user.avatar}`
          }
        }
      : undefined
  }))

  window.store.set({ chats })
  return chats
}

const addChat = async (form: ChatCreateForm): Promise<ChatPreview[]> => {
  const response = await chatsApi.create(form)

  if (response.status !== 200) {
    showError(response)
  }

  return await getChats()
}

const getChatUsers = async (id: number): Promise<User[]> => {
  const response = await chatsApi.chatUsers(id)

  if (response.status !== 200) {
    showError(response)
  }

  const users = JSON.parse(response.response)
  return users
}

const addUserToChat = async (data: ChatAddUserPreForm): Promise<void> => {
  const userId = await userSearch({ login: data.login })

  if (userId) {
    const response = await chatsApi.addUser({
      users: [userId],
      chatId: data.chatId
    })

    if (response.status !== 200) {
      showError(response)
    }
  }
}

const removeUserFromChat = async (
  data: ChatRemoveUserPreForm
): Promise<void> => {
  const userId = await userSearch({ login: data.login })

  if (userId) {
    const response = await chatsApi.removeUser({
      users: [userId],
      chatId: data.chatId
    })

    if (response.status !== 200) {
      showError(response)
    }
  }
}

const getToken = async (id: number): Promise<string> => {
  const response = await chatsApi.token(id)

  if (response.status !== 200) {
    showError(response)
  }
  const chatToken = JSON.parse(response.response).token
  window.store.set({ chatToken })
  return chatToken
}

export {
  getChats,
  addChat,
  addUserToChat,
  removeUserFromChat,
  getChatUsers,
  getToken
}
