import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'

export class RegistrationPage extends Block {
  constructor() {
    super({
      title: 'Регистрация',
      inputs: [
        { label: 'Почта', name: 'email', type: 'text' },
        { label: 'Логин', name: 'login', type: 'password' },
        { label: 'Имя', name: 'first_name', type: 'password' },
        { label: 'Фамилия', name: 'second_name', type: 'password' },
        { label: 'Телефон', name: 'phone', type: 'password' },
        { label: 'Пароль', name: 'password', type: 'password' },
        { label: 'Пароль (еще раз)', name: 'password', type: 'password' }
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

            console.log(form)
          }
        },
        {
          label: 'Войти',
          customClass: 'white-blue',
          onClick: (event: MouseEvent) => {
            changeUrl(event, 'login')
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
