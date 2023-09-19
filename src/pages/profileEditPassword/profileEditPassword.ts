import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'

export class ProfileEditPassword extends Block {
  constructor() {
    super({
      userName: 'Пользователь',
      inputs: [
        {
          label: 'Старый пароль',
          name: 'oldPassword',
          type: 'password'
        },
        {
          label: 'Новый пароль',
          name: 'newPassword',
          type: 'password'
        },
        {
          label: 'Повторите новый пароль',
          name: 'newPassword',
          type: 'password'
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
