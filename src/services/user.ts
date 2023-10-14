import UserApi from 'api/user'
import {
  type UserSearchForm,
  type User,
  type UserEditForm,
  type UserEditPasswordForm
} from 'types/User'
import { showError } from 'utils/showError'

const userApi = new UserApi()

const changeUserProfile = async (data: UserEditForm): Promise<User> => {
  const response = await userApi.changeProfile(data)

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
  const response = await userApi.changeAvatar(payload)

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
  const response = await userApi.changePassword(data)

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

const userSearch = async (data: UserSearchForm): Promise<number> => {
  const response = await userApi.search(data)

  if (response.status !== 200) {
    showError(response)
  }

  const result = JSON.parse(response.response)?.[0]?.id
  return result
}

export { changeUserProfile, changeUserAvatar, userSearch, changeUserPassword }
