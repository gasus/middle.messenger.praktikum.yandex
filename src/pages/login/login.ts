import { signin } from 'services/auth'
import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'
import { validateLogin, validatePassword } from 'utils/validators'

export class LoginPage extends Block {
  constructor() {
    super({
      title: 'Вход',
      inputs: [
        {
          label: 'Логин',
          name: 'login',
          type: 'text',
          validate: (value: string) => validateLogin(value)
        },
        {
          label: 'Пароль',
          name: 'password',
          type: 'password',
          validate: (value: string) => validatePassword(value)
        }
      ],
      buttons: [
        {
          label: 'Авторизоваться',
          customClass: 'blue-white',
          onClick: (event: MouseEvent) => {
            event.preventDefault()
            const form = this.props.inputs?.reduce(
              (acc: object, i: { name: string }) => {
                const name = i.name
                const value = name && this.refs.form.refs[name]?.value()
                return { ...acc, [name]: value }
              },
              {}
            )
            const formIsNotValid = Object.values(form).filter((i) => !i).length
            if (!formIsNotValid) {
              void signin(form)
            }
          }
        },
        {
          label: 'Нет аккаунта?',
          customClass: 'white-blue',
          onClick: (event: MouseEvent) => {
            changeUrl({ event, path: 'sign-up' })
          }
        }
      ]
    })
  }

  protected render(): string {
    return `
        {{{ EntryBlock ref='form' title=title inputs=inputs buttons=buttons }}}
    `
  }
}
