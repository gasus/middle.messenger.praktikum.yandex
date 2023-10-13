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

  const userRaw = JSON.parse(response.response)
  const user = {
    ...userRaw,
    avatar: `https://ya-praktikum.tech/api/v2/resources${userRaw.avatar}`
  }

  window.store.set({ user })
  return user
}

const changeUserAvatar = async (file: File): Promise<User> => {
  const payload = new FormData()
  payload.append('avatar', file)
  const response = await authApi.changeAvatar(payload)

  if (response.status !== 200) {
    showError(response)
  }

  const userRaw = JSON.parse(response.response)
  const user = {
    ...userRaw,
    avatar: `https://ya-praktikum.tech/api/v2/resources${userRaw.avatar}`
  }

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

  const userRaw = JSON.parse(response.response)
  const user = {
    ...userRaw,
    avatar: `https://ya-praktikum.tech/api/v2/resources${userRaw.avatar}`
  }

  window.store.set({ user })
}

export { changeUserProfile, changeUserAvatar, changeUserPassword }
