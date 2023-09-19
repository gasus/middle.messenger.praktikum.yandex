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
          onClick: () => {
            console.log('Результат редактирования пароля пользователя') // TODO
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
