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

export interface ChatDeleteForm {
  chatId: number
}

export interface ChatAddUserPreForm {
  login: string
  chatId: number
}

export interface ChatAddUserForm {
  users: number[]
  chatId: number
}

export interface ChatRemoveUserPreForm {
  login: string
  chatId: number
}

export interface ChatRemoveUserForm {
  users: number[]
  chatId: number
}

export interface Message {
  chat_id: number
  content: string
  file: string
  id: number
  is_read: boolean
  time: string
  type: string
  user_id: number
  isUser: boolean
}
