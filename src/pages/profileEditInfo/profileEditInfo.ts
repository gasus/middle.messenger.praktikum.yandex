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
          label: 'Сохранить',
          customClass: 'blue-white',
          onClick: () => {
            console.log('Результат редактирования данных пользователя') // TODO
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
        {{{ ProfileBlock userName=userName goBackClick=goBackClick inputs=inputs buttons=buttons }}}
    `
  }
}
