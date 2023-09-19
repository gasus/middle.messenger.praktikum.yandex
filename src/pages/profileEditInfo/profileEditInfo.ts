import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'

export class ProfileEditInfo extends Block {
  constructor() {
    super({
      userName: 'Пользователь',
      inputs: [
        {
          label: 'Почта',
          name: 'email',
          type: 'text'
        },
        {
          label: 'Логин',
          name: 'login',
          type: 'text'
        },
        {
          label: 'Имя',
          name: 'first_name',
          type: 'text'
        },
        {
          label: 'Фамилия',
          name: 'second_name',
          type: 'text'
        },
        {
          label: 'Имя в чате',
          name: 'display_name',
          type: 'text'
        },
        {
          label: 'Телефон',
          name: 'phone',
          type: 'text'
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
        changeUrl(event, 'profileView')
      }
    })
  }

  protected render(): string {
    return `
        {{{ ProfileBlock ref='form' userName=userName goBackClick=goBackClick inputs=inputs buttons=buttons }}}
    `
  }
}
