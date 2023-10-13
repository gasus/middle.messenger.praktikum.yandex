import { type User } from 'types/User'

export interface ChatPreview {
  id: number
  title: string
  avatar: string
  unread_count: number
  created_by: number
  last_message: {
    user: User
    time: string
    content: string
  }
}

export interface ChatCreateForm {
  title: string
}

export interface ChatAddUserForm {
  users: number[]
  chatId: number
}

export interface ChatRemoveUserForm {
  users: number[]
  chatId: number
}
