import AuthApi from 'api/auth'
import { type UserCreate } from 'types/UserCreate'
import { type UserLogin } from 'types/UserLogin'
import { changeUrl } from 'utils/changeUrl'

const authApi = new AuthApi()

const getUser = async (): Promise<void> => {
  const response = await authApi.user()

  if (response.status !== 200) {
    throw Error(response.reason)
  }

  // window.store.set({ user: me })
}

const signin = async (data: UserLogin): Promise<void> => {
  const response = await authApi.login(data)

  if (response.status !== 200) {
    throw Error(response.reason)
  }

  await getUser()
  changeUrl({ path: 'messenger' })
}

const signup = async (data: UserCreate): Promise<void> => {
  const response = await authApi.create(data)

  if (response.status !== 200) {
    throw Error(response.reason)
  }

  await getUser()
  changeUrl({ path: 'messenger' })
}

const logout = async (): Promise<void> => {
  const response = await authApi.logout()

  if (response.status !== 200) {
    throw Error(response.reason)
  }

  changeUrl({ path: '' })
  // window.store.set({ user: null, chats: [] })
}

export { signup, signin, logout, getUser }
