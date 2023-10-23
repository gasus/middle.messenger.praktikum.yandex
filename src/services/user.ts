import UserApi from 'api/user'
import {
  type UserSearchForm,
  type User,
  type UserEditForm,
  type UserEditPasswordForm
} from 'types/User'

const userApi = new UserApi()

const changeUserProfile = async (data: UserEditForm): Promise<User> => {
  const user = await userApi.changeProfile(data)

  window.store.set({ user })
  return user
}

const changeUserAvatar = async (file: File): Promise<User> => {
  const payload = new FormData()
  payload.append('avatar', file)
  const user = await userApi.changeAvatar(payload)

  window.store.set({ user })
  return user
}

const changeUserPassword = async (
  data: UserEditPasswordForm
): Promise<void> => {
  const user = await userApi.changePassword(data)

  window.store.set({ user })
}

const userSearch = async (data: UserSearchForm): Promise<number> => {
  const response = await userApi.search(data)

  const result = response?.[0]?.id
  return result
}

export { changeUserProfile, changeUserAvatar, userSearch, changeUserPassword }
