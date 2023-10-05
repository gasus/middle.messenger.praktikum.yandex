import { type User } from './User'

export interface AppState {
  error: null | string
  user: null | User
  isOpenDialogChat: boolean
  chats: any[]
}
