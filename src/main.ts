import * as Components from 'components/index'
import * as Pages from 'pages/index'
import { type PageTypes } from 'types/PageTypes'
import './style.less'
import { registerComponent } from 'utils/registerComponent'

registerComponent('Header', Components.Header)
registerComponent('Button', Components.Button)
registerComponent('Input', Components.Input)
registerComponent('InputField', Components.InputField)
registerComponent('InputError', Components.InputError)
registerComponent('ErrorInfo', Components.ErrorInfo)
registerComponent('ButtonCircleWithArrow', Components.ButtonCircleWithArrow)
registerComponent('GoBackBlock', Components.GoBackBlock)
registerComponent('Avatar', Components.Avatar)
registerComponent('ProfileBlock', Components.ProfileBlock)
registerComponent('EntryBlock', Components.EntryBlock)

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
// }

const pages: { [key in PageTypes]: any } = {
  login: Pages.LoginPage,
  registration: Pages.RegistrationPage,
  error500: Pages.Error500Page,
  error404: Pages.Error404Page,
  profileView: Pages.ProfileViewPage,
  profileEditInfo: Pages.ProfileEditInfo,
  profileEditPassword: Pages.ProfileEditPassword
  // chat: Pages.ChatPage,
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
