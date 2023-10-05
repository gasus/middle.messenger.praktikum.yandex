import { HTTPTransport } from 'utils/HTTPTransport'
import { type UserCreate } from 'types/UserCreate'
import { type UserLogin } from 'types/UserLogin'

const authApi = new HTTPTransport('/auth')

export default class AuthApi {
  async create(data: UserCreate): Promise<any> {
    return await authApi.post('/signup', { data })
  }

  async login(data: UserLogin): Promise<any> {
    return await authApi.post('/signin', { data })
  }

  async user(): Promise<any> {
    return await authApi.get('/user')
  }

  async logout(): Promise<any> {
    return await authApi.post('/logout')
  }
}
