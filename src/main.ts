import Handlebars from 'handlebars'
import * as Components from 'components/index'
import * as Pages from 'pages/index'
import { type PageTypes } from 'types/PageTypes'
import './style.less'
import { registerComponent } from 'utils/registerComponent'

Handlebars.registerPartial('EntryForm', Components.EntryForm)

registerComponent('Header', Components.Header)
registerComponent('Button', Components.Button)
registerComponent('Input', Components.Input)
registerComponent('InputField', Components.InputField)
registerComponent('InputError', Components.InputError)
registerComponent('ErrorInfo', Components.ErrorInfo)

// const pageArgs: { [key in PageTypes]: any } = {
//   chat: {
//     buttons: [{ label: 'Профиль >', className: 'white-gray', page: 'profile' }],
//     chanels: [
//       {
//         id: '1',
//         chanelName: 'Иван Иванов',
//         lastMessageDate: '22.08.2023',
//         lastMessage: 'Больше мне не пиши',
//         unreadCount: 1
//       },
//       {
//         id: '2',
//         chanelName: 'Генадий Генадьев',
//         lastMessageDate: '24.08.2023',
//         lastMessage: 'Привет',
//         unreadCount: 999
//       }
//     ]
//   },
//   profile: {
//     userName: 'Пользователь',
//     returnPage: 'chat',
//     inputs: [
//       {
//         label: 'Почта',
//         name: 'email',
//         type: 'text',
//         value: '',
//         disabled: true
//       },
//       {
//         label: 'Логин',
//         name: 'login',
//         type: 'text',
//         value: '',
//         disabled: true
//       },
//       {
//         label: 'Имя',
//         name: 'first_name',
//         type: 'text',
//         value: '',
//         disabled: true
//       },
//       {
//         label: 'Фамилия',
//         name: 'second_name',
//         type: 'text',
//         value: '',
//         disabled: true
//       },
//       {
//         label: 'Имя в чате',
//         name: 'display_name',
//         type: 'text',
//         value: '',
//         disabled: true
//       },
//       {
//         label: 'Телефон',
//         name: 'phone',
//         type: 'text',
//         value: '',
//         disabled: true
//       }
//     ],
//     buttons: [
//       {
//         label: 'Изменить данные',
//         className: 'white-blue',
//         page: 'profileInfoEdit'
//       },
//       {
//         label: 'Изменить пароль',
//         className: 'white-blue',
//         page: 'profilePasswordEdit'
//       },
//       { label: 'Выйти', className: 'white-red', page: 'login' }
//     ]
//   },
//   profileInfoEdit: {
//     userName: 'Пользователь',
//     returnPage: 'profile',
//     inputs: [
//       {
//         label: 'Почта',
//         name: 'email',
//         type: 'text',
//         value: ''
//       },
//       {
//         label: 'Логин',
//         name: 'login',
//         type: 'text',
//         value: ''
//       },
//       {
//         label: 'Имя',
//         name: 'first_name',
//         type: 'text',
//         value: ''
//       },
//       {
//         label: 'Фамилия',
//         name: 'second_name',
//         type: 'text',
//         value: ''
//       },
//       {
//         label: 'Имя в чате',
//         name: 'display_name',
//         type: 'text',
//         value: ''
//       },
//       {
//         label: 'Телефон',
//         name: 'phone',
//         type: 'text',
//         value: ''
//       }
//     ],
//     buttons: [{ label: 'Сохранить', className: 'blue-white', page: 'profile' }]
//   },
//   profilePasswordEdit: {
//     userName: 'Пользователь',
//     returnPage: 'profile',
//     inputs: [
//       {
//         label: 'Старый пароль',
//         name: 'oldPassword',
//         type: 'password'
//       },
//       {
//         label: 'Новый пароль',
//         name: 'newPassword',
//         type: 'password'
//       },
//       {
//         label: 'Повторите новый пароль',
//         name: 'newPassword',
//         type: 'password'
//       }
//     ],
//     buttons: [{ label: 'Сохранить', className: 'blue-white', page: 'profile' }]
//   }
// }

const pages: { [key in PageTypes]: any } = {
  login: Pages.LoginPage,
  registration: Pages.RegistrationPage,
  error500: Pages.Error500Page,
  error404: Pages.Error404Page
  // chat: [Pages.ChatPage],
  // profile: [Pages.ProfilePage],
  // profileInfoEdit: [Pages.ProfilePage],
  // profilePasswordEdit: [Pages.ProfilePage]
}

const navigate = (): void => {
  const app = document.getElementById('app')

  const params = new URLSearchParams(document.location.search)
  const page = (params.get('page') as PageTypes) ?? undefined

  const Component = page ? pages[page] : pages.login
  const component = new Component()
  if (app) app.innerHTML = ''
  app?.append(component.getContent())
}

document.addEventListener('DOMContentLoaded', () => {
  navigate()
})

window.addEventListener('popstate', () => {
  navigate()
})
