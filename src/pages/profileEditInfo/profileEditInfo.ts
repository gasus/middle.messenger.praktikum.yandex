import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'
import {
  validateEmail,
  validateLogin,
  validateName,
  validatePhone
} from 'utils/validators'

export class ProfileEditInfo extends Block {
  constructor() {
    super({
      userName: 'Пользователь',
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
          label: 'Имя в чате',
          name: 'display_name',
          type: 'text'
        },
        {
          label: 'Телефон',
          name: 'phone',
          type: 'text',
          validate: (value: string) => validatePhone(value)
        }
      ],
      buttons: [
        {
          label: 'Сохранить',
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

            console.log(form)
          }
        }
      ],
      goBackClick: (event: MouseEvent) => {
        changeUrl({ event, path: 'profileView' })
      }
    })
  }

  protected render(): string {
    return `
        {{{ ProfileBlock ref='form' userName=userName goBackClick=goBackClick inputs=inputs buttons=buttons }}}
    `
  }
}
