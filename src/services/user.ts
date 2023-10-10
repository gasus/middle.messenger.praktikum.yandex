import UserApi from 'api/user'
import {
  type User,
  type UserEditForm,
  type UserEditPasswordForm
} from 'types/User'
import { showError } from 'utils/showError'

const authApi = new UserApi()

const changeUserProfile = async (data: UserEditForm): Promise<User> => {
  const response = await authApi.changeProfile(data)

  if (response.status !== 200) {
    showError(response)
  }

  const user = JSON.parse(response.response)

  window.store.set({ user })
  return user
}

// TODO: Начать использовать
const changeUserAvatar = async (data: Blob): Promise<User> => {
  const response = await authApi.changeAvatar(data)

  if (response.status !== 200) {
    showError(response)
  }

  const user = JSON.parse(response.response)

  window.store.set({ user })
  return user
}

const changeUserPassword = async (
  data: UserEditPasswordForm
): Promise<void> => {
  const response = await authApi.changePassword(data)

  if (response.status !== 200) {
    showError(response)
  }

  const user = JSON.parse(response.response)

  window.store.set({ user })
}

export { changeUserProfile, changeUserAvatar, changeUserPassword }
