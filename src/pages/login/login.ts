import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'

export class LoginPage extends Block {
  constructor() {
    super({
      validate: {
        login: (value: string) =>
          value?.length >= 3
            ? ''
            : 'Длина логина должна быть не менее 3х символов'
      },
      onLogin: (event: any) => {
        event.preventDefault()
        const login = this.refs.login.value()
        const password = this.refs.password.value()

        console.log({
          login,
          password
        })
      },
      toRegistration: (event: any) => {
        event.preventDefault()
        changeUrl('registration')
      }
    })
  }

  protected render(): string {
    return `
        {{#> EntryForm}}
            {{{ Header label="Вход" }}}
            <div>
                {{{ InputField label='Логин' ref='login' name='login' type='text' validate=validate.login }}}
                {{{ InputField label='Пароль' ref='password' name='password' type='password' }}}
            </div>
            <div class="login-form-footer">
                {{{ Button label='Авторизоваться' customClass='blue-white' onClick=onLogin }}}
                {{{ Button label='Нет аккаунта?' customClass='white-blue' onClick=toRegistration }}}
            </div>
        {{/EntryForm}}
    `
  }
}
