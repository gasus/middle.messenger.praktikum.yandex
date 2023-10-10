import AuthApi from 'api/auth'
import { type UserCreateForm, type UserLoginForm } from 'types/User'
import { changeUrl } from 'utils/changeUrl'
import { showError } from 'utils/showError'

const authApi = new AuthApi()

const getUser = async (): Promise<void> => {
  const response = await authApi.user()

  if (response.status !== 200) {
    throw Error(response.reason)
  }

  const user = JSON.parse(response.response)

  window.store.set({ user })
  changeUrl({ path: 'messenger' })
}

const signin = async (data: UserLoginForm): Promise<void> => {
  const response = await authApi.login(data)

  if (response.status !== 200) {
    showError(response)
  }

  await getUser()
}

const signup = async (data: UserCreateForm): Promise<void> => {
  const response = await authApi.create(data)

  if (response.status !== 200) {
    showError(response)
  }

  await getUser()
}

const logout = async (): Promise<void> => {
  const response = await authApi.logout()

  if (response.status !== 200) {
    throw Error(response.reason)
  }

  changeUrl({ path: '' })
  window.store.set({ user: null, chats: [] })
}

export { signup, signin, logout, getUser }
