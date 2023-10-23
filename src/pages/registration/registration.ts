import Block from '../../utils/Block'
import { changeUrl } from '../../utils/changeUrl'
import { signup } from '../../services/auth'
import {
  validateEmail,
  validateLogin,
  validateName,
  validatePassword,
  validatePhone
} from '../../utils/validators'

export class RegistrationPage extends Block {
  constructor() {
    super({
      title: 'Регистрация',
      inputs: [
        {
          label: 'Почта',
          name: 'email',
          type: 'text',
          validate: (value: string) => validateEmail(value)
        },
        {
          label: 'Логин',
          name: 'login',
          type: 'text',
          validate: (value: string) => validateLogin(value)
        },
        {
          label: 'Имя',
          name: 'first_name',
          type: 'text',
          validate: (value: string) => validateName(value)
        },
        {
          label: 'Фамилия',
          name: 'second_name',
          type: 'text',
          validate: (value: string) => validateName(value)
        },
        {
          label: 'Телефон',
          name: 'phone',
          type: 'text',
          validate: (value: string) => validatePhone(value)
        },
        {
          label: 'Пароль',
          name: 'password',
          type: 'password',
          validate: (value: string) => validatePassword(value)
        },
        {
          label: 'Пароль (еще раз)',
          name: 'password_check',
          type: 'password',
          validate: (value: string) => validatePassword(value)
        }
      ],
      buttons: [
        {
          label: 'Зарегистрироваться',
          customClass: 'blue-white',
          onClick: (event: MouseEvent) => {
            event.preventDefault()
            const form = this.props.inputs.reduce(
              (acc: object, i: { name: string }) => {
                const name = i.name
                const value = name && this.refs.form.refs[name]?.value()
                return { ...acc, [name]: value }
              },
              {}
            )
            const formIsNotValid = Object.values(form).filter((i) => !i).length
            if (!formIsNotValid) {
              void signup(form)
            }
          }
        },
        {
          label: 'Войти',
          customClass: 'white-blue',
          onClick: (event: MouseEvent) => {
            changeUrl({ event, path: '/' })
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
