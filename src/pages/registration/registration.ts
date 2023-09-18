import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'

export class RegistrationPage extends Block {
  constructor() {
    super({
      validate: {
        login: (value: string) =>
          value?.length >= 3
            ? ''
            : 'Длина логина должна быть не менее 3х символов'
      },
      onRegister: (event: any) => {
        event.preventDefault()
        const email = this.refs.email.value()
        const login = this.refs.login.value()
        const firstName = this.refs.first_name.value()
        const secondName = this.refs.second_name.value()
        const phone = this.refs.phone.value()
        const password = this.refs.password.value()

        console.log({
          email,
          login,
          firstName,
          secondName,
          phone,
          password
        })
      },
      toLogin: (event: any) => {
        event.preventDefault()
        changeUrl('login')
      }
    })
  }

  protected render(): string {
    return `
        {{#> EntryForm}}
            {{{ Header label="Регистрация" }}}
            <div>
                {{{ InputField label='Почта' ref='email' name='email' type='text' validate=validate.login }}}
                {{{ InputField label='Логин' ref='login' name='login' type='password' }}}
                {{{ InputField label='Имя' ref='first_name' name='first_name' type='password' }}}
                {{{ InputField label='Фамилия' ref='second_name' name='second_name' type='password' }}}
                {{{ InputField label='Телефон' ref='phone' name='phone' type='password' }}}
                {{{ InputField label='Пароль' ref='password' name='password' type='password' }}}
                {{{ InputField label='Пароль (еще раз)' ref='password' name='password' type='password' }}}
            </div>
            <div class="login-form-footer">
                {{{ Button label='Зарегистрироваться' customClass='blue-white' onClick=onRegister }}}
                {{{ Button label='Войти' customClass='white-blue' onClick=toLogin }}}
            </div>
        {{/EntryForm}}
    `
  }
}
