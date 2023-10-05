export interface User {
  id: number
  first_name: string
  second_name: string
  display_name: string
  phone: string
  login: string
  avatar: string
  email: string
}

export interface UserCreateForm {
  first_name: string
  second_name: string
  phone: string
  login: string
  email: string
  password: string
}

export interface UserLoginForm {
  login: string
  password: string
}
