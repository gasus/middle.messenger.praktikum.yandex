import {
  type ChatAddUserForm,
  type ChatDeleteForm,
  type ChatRemoveUserForm,
  type ChatCreateForm
} from '../types/Chats'
import { HTTPTransport } from '../utils/HTTPTransport'

const chatsApi = new HTTPTransport('/chats')

export default class ChatsApi {
  async chats(): Promise<any> {
    return await chatsApi.get('', { hasError: false })
  }

  async create(data: ChatCreateForm): Promise<any> {
    return await chatsApi.post('', { data })
  }

  async delete(data: ChatDeleteForm): Promise<any> {
    return await chatsApi.delete('', { data })
  }

  async addUser(data: ChatAddUserForm): Promise<any> {
    return await chatsApi.put('/users', { data })
  }

  async removeUser(data: ChatRemoveUserForm): Promise<any> {
    return await chatsApi.delete('/users', { data })
  }

  async chatUsers(id: number): Promise<any> {
    return await chatsApi.get(`/${id}/users`)
  }

  async token(id: number): Promise<any> {
    return await chatsApi.post(`/token/${id}`)
  }
}
