import { HTTPTransport } from 'utils/HTTPTransport'
import { type UserCreateForm, type UserLoginForm } from 'types/User'

const authApi = new HTTPTransport('/auth')

export default class AuthApi {
  async create(data: UserCreateForm): Promise<any> {
    return await authApi.post('/signup', { data })
  }

  async login(data: UserLoginForm): Promise<any> {
    return await authApi.post('/signin', { data })
  }

  async user(): Promise<any> {
    return await authApi.get('/user', { hasError: false })
  }

  async logout(): Promise<any> {
    return await authApi.post('/logout')
  }
}
