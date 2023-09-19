import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'

export class ProfileViewPage extends Block {
  constructor() {
    super({
      userName: 'Пользователь',
      inputs: [
        {
          label: 'Почта',
          name: 'email',
          type: 'text',
          disabled: true
        },
        {
          label: 'Логин',
          name: 'login',
          type: 'text',
          disabled: true
        },
        {
          label: 'Имя',
          name: 'first_name',
          type: 'text',
          disabled: true
        },
        {
          label: 'Фамилия',
          name: 'second_name',
          type: 'text',
          disabled: true
        },
        {
          label: 'Имя в чате',
          name: 'display_name',
          type: 'text',
          disabled: true
        },
        {
          label: 'Телефон',
          name: 'phone',
          type: 'text',
          disabled: true
        }
      ],
      buttons: [
        {
          label: 'Изменить данные',
          customClass: 'white-blue',
          onClick: (event: MouseEvent) => {
            changeUrl(event, 'profileEditInfo')
          }
        },
        {
          label: 'Изменить пароль',
          customClass: 'white-blue',
          onClick: (event: MouseEvent) => {
            changeUrl(event, 'profileEditPassword')
          }
        },
        {
          label: 'Выйти',
          customClass: 'white-red',
          onClick: (event: MouseEvent) => {
            changeUrl(event, 'login')
          }
        }
      ],
      goBackClick: (event: MouseEvent) => {
        changeUrl(event, 'chat')
      }
    })
  }

  protected render(): string {
    return `
        {{{ ProfileBlock userName=userName goBackClick=goBackClick inputs=inputs buttons=buttons }}}
    `
  }
}
