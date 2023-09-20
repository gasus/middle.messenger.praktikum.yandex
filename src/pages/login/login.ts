import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'

export class LoginPage extends Block {
  constructor() {
    super({
      title: 'Вход',
      inputs: [
        {
          label: 'Логин',
          name: 'login',
          type: 'text'
        },
        {
          label: 'Пароль',
          name: 'password',
          type: 'password'
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

            console.log(form)
            changeUrl(event, 'chat')
          }
        },
        {
          label: 'Нет аккаунта?',
          customClass: 'white-blue',
          onClick: (event: MouseEvent) => {
            changeUrl(event, 'registration')
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
