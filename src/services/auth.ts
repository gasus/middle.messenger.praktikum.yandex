import AuthApi from 'api/auth'
import { type UserCreateForm, type UserLoginForm } from 'types/User'
import { changeUrl } from 'utils/changeUrl'
import { getChats } from './chats'

const authApi = new AuthApi()

const initApp = async (): Promise<void> => {
  await getUser()
  await getChats()
  changeUrl({ path: 'messenger' })
}

const getUser = async (): Promise<void> => {
  const user = await authApi.user()

  window.store.set({ user })
}

const signin = async (data: UserLoginForm): Promise<void> => {
  await authApi.login(data)

  await initApp()
}

const signup = async (data: UserCreateForm): Promise<void> => {
  await authApi.create(data)

  await initApp()
}

const logout = async (): Promise<void> => {
  await authApi.logout()

  changeUrl({ path: '' })
  window.store.set({ user: null, chats: [] })
}

export { signup, signin, logout, getUser, initApp }
