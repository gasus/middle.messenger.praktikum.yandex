import * as Components from 'components/index'
import * as Pages from 'pages/index'
import './style.less'
import { registerComponent } from 'utils/registerComponent'
import Router from 'utils/Router'

Object.entries(Components).forEach((i) => {
  const componentName = i[0]
  const component = i[1]
  registerComponent(componentName, component)
})

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router('#app')
  router
    .use('/', Pages.LoginPage)
    .use('/registration', Pages.RegistrationPage)
    .use('/error500', Pages.Error500Page)
    .use('/error404', Pages.Error404Page)
    .use('/profileView', Pages.ProfileViewPage)
    .use('/profileEditInfo', Pages.ProfileEditInfo)
    .use('/profileEditPassword', Pages.ProfileEditPassword)
    .use('/chat', Pages.ChatPage)
    .start()
})
