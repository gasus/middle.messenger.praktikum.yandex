import { HTTPTransport } from '../utils/HTTPTransport'
import {
  type UserEditPasswordForm,
  type UserEditForm,
  type UserSearchForm
} from '../types/User'

const authApi = new HTTPTransport('/user')

export default class UserApi {
  async changeProfile(data: UserEditForm): Promise<any> {
    return await authApi.put('/profile', { data })
  }

  async changeAvatar(data: FormData): Promise<any> {
    return await authApi.put('/profile/avatar', { data })
  }

  async changePassword(data: UserEditPasswordForm): Promise<any> {
    return await authApi.put('/password', { data })
  }

  async search(data: UserSearchForm): Promise<any> {
    return await authApi.post('/search', { data })
  }

  async getUserById(id: string): Promise<any> {
    return await authApi.get(`/${id}`)
  }
}
