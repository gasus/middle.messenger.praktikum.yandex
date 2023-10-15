import ChatsApi from 'api/chats'
import {
  type ChatCreateForm,
  type ChatPreview,
  type ChatAddUserPreForm,
  type ChatRemoveUserPreForm,
  type ChatDeleteForm
} from 'types/Chats'
import { type User } from 'types/User'
import { userSearch } from './user'

const chatsApi = new ChatsApi()

const getChats = async (): Promise<ChatPreview[]> => {
  const chatsRaw = await chatsApi.chats()

  const chats = chatsRaw.map((i: ChatPreview) => ({
    ...i,
    last_message: i?.last_message
      ? {
          ...i?.last_message,
          time: new Date(i?.last_message?.time)?.toLocaleString?.()
        }
      : undefined
  }))

  window.store.set({ chats })
  return chats
}

const addChat = async (form: ChatCreateForm): Promise<ChatPreview[]> => {
  await chatsApi.create(form)

  return await getChats()
}

const deleteChat = async (form: ChatDeleteForm): Promise<ChatPreview[]> => {
  await chatsApi.delete(form)

  return await getChats()
}

const getChatUsers = async (id: number): Promise<User[]> => {
  const users = await chatsApi.chatUsers(id)
  return users
}

const addUserToChat = async (data: ChatAddUserPreForm): Promise<void> => {
  const userId = await userSearch({ login: data.login })

  if (userId) {
    await chatsApi.addUser({
      users: [userId],
      chatId: data.chatId
    })
  }
}

const removeUserFromChat = async (
  data: ChatRemoveUserPreForm
): Promise<void> => {
  const userId = await userSearch({ login: data.login })

  if (userId) {
    await chatsApi.removeUser({
      users: [userId],
      chatId: data.chatId
    })
  }
}

const getToken = async (id: number): Promise<string> => {
  const response = await chatsApi.token(id)

  const chatToken = response.token
  window.store.set({ chatToken })
  return chatToken
}

export {
  getChats,
  addChat,
  deleteChat,
  addUserToChat,
  removeUserFromChat,
  getChatUsers,
  getToken
}
