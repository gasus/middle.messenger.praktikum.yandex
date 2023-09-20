import * as Components from 'components/index'
import * as Pages from 'pages/index'
import { type PageTypes } from 'types/PageTypes'
import './style.less'
import { registerComponent } from 'utils/registerComponent'

Object.entries(Components).forEach((i) => {
  const componentName = i[0]
  const component = i[1]
  registerComponent(componentName, component)
})

// TODO: Не удалось типизировать
const pages: { [key in PageTypes]: any } = {
  login: Pages.LoginPage,
  registration: Pages.RegistrationPage,
  error500: Pages.Error500Page,
  error404: Pages.Error404Page,
  profileView: Pages.ProfileViewPage,
  profileEditInfo: Pages.ProfileEditInfo,
  profileEditPassword: Pages.ProfileEditPassword,
  chat: Pages.ChatPage
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
