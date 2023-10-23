import * as Components from 'components/index'
import * as Pages from 'pages/index'
import { type AppState } from 'types/AppState'
import { registerComponent } from 'utils/registerComponent'
import Router from 'utils/Router'
import { Store } from 'utils/Store'
import { initApp } from 'services/auth'
import './style.less'

declare global {
  interface Window {
    store: Store<AppState>
  }
}

const initState: AppState = {
  error: null,
  user: null,
  messages: [],
  chatToken: null,
  isOpenDialogChat: false,
  settingsMode: 'view',
  chats: []
}

window.store = new Store<AppState>(initState)

Object.entries(Components).forEach((i) => {
  const componentName = i[0]
  const component = i[1]
  registerComponent(componentName, component)
})

export const appRouter = new Router('#app')

document.addEventListener('DOMContentLoaded', () => {
  appRouter
    .use('/', Pages.LoginPage)
    .use('/sign-up', Pages.RegistrationPage)
    .use('/error500', Pages.Error500Page)
    .use('/error404', Pages.Error404Page)
    .use('/profileView', Pages.ProfileViewPage)
    .use('/messenger', Pages.ChatPage)
    .start()

  void initApp()
})
