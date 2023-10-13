import {
  type ChatAddUserForm,
  type ChatRemoveUserForm,
  type ChatCreateForm
} from 'types/Chats'
import { HTTPTransport } from 'utils/HTTPTransport'

const chatsApi = new HTTPTransport('/chats')

export default class ChatsApi {
  async chats(): Promise<any> {
    return await chatsApi.get('')
  }

  async create(data: ChatCreateForm): Promise<any> {
    return await chatsApi.post('', { data })
  }

  async addUser(data: ChatAddUserForm): Promise<any> {
    return await chatsApi.put('', { data })
  }

  async removeUser(data: ChatRemoveUserForm): Promise<any> {
    return await chatsApi.delete('', { data })
  }
}
