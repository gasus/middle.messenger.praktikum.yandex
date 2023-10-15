import { logout } from 'services/auth'
import {
  changeUserAvatar,
  changeUserPassword,
  changeUserProfile
} from 'services/user'
import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'
import { connect } from 'utils/connect'
import {
  validateEmail,
  validateLogin,
  validateName,
  validatePassword,
  validatePhone
} from 'utils/validators'

class ProfileViewPage extends Block {
  constructor() {
    const user = window.store.getState().user

    const inputs = {
      view: [
        {
          label: 'Почта',
          name: 'email',
          type: 'text',
          value: user?.email,
          disabled: true
        },
        {
          label: 'Логин',
          name: 'login',
          type: 'text',
          value: user?.login,
          disabled: true
        },
        {
          label: 'Имя',
          name: 'first_name',
          type: 'text',
          value: user?.first_name,
          disabled: true
        },
        {
          label: 'Фамилия',
          name: 'second_name',
          type: 'text',
          value: user?.second_name,
          disabled: true
        },
        {
          label: 'Имя в чате',
          name: 'display_name',
          type: 'text',
          value: user?.display_name,
          disabled: true
        },
        {
          label: 'Телефон',
          name: 'phone',
          type: 'text',
          value: user?.phone,
          disabled: true
        }
      ],
      editPassword: [
        {
          label: 'Старый пароль',
          name: 'oldPassword',
          type: 'password'
        },
        {
          label: 'Новый пароль',
          name: 'newPassword',
          type: 'password',
          validate: (value: string) => validatePassword(value)
        },
        {
          label: 'Повторите новый пароль',
          name: 'newPassword',
          type: 'password',
          validate: (value: string) => validatePassword(value)
        }
      ],
      editInfo: [
        {
          label: 'Почта',
          name: 'email',
          type: 'text',
          value: user?.email,
          validate: (value: string) => validateEmail(value)
        },
        {
          label: 'Логин',
          name: 'login',
          type: 'text',
          value: user?.login,
          validate: (value: string) => validateLogin(value)
        },
        {
          label: 'Имя',
          name: 'first_name',
          type: 'text',
          value: user?.first_name,
          validate: (value: string) => validateName(value)
        },
        {
          label: 'Фамилия',
          name: 'second_name',
          type: 'text',
          value: user?.second_name,
          validate: (value: string) => validateName(value)
        },
        {
          label: 'Имя в чате',
          name: 'display_name',
          type: 'text',
          value: user?.display_name
        },
        {
          label: 'Телефон',
          name: 'phone',
          type: 'text',
          value: user?.phone,
          validate: (value: string) => validatePhone(value)
        }
      ]
    }

    const buttons = {
      view: [
        {
          label: 'Изменить данные',
          customClass: 'white-blue',
          onClick: () => {
            this.setProps({
              ...this.props,
              inputs: inputs.editInfo,
              buttons: buttons.editInfo
            })
          }
        },
        {
          label: 'Изменить пароль',
          customClass: 'white-blue',
          onClick: () => {
            this.setProps({
              ...this.props,
              inputs: inputs.editPassword,
              buttons: buttons.editPassword
            })
          }
        },
        {
          label: 'Выйти',
          customClass: 'white-red',
          onClick: () => {
            void logout()
          }
        }
      ],
      editPassword: [
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

            void changeUserPassword(form).then(() => {
              changeUrl({ event, path: '/profileView' })
            })
          }
        },
        {
          label: 'Отмена',
          customClass: 'white-blue',
          onClick: () => {
            this.setProps({
              ...this.props,
              inputs: inputs.view,
              buttons: buttons.view
            })
          }
        }
      ],
      editInfo: [
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

            void changeUserProfile(form).then(() => {
              changeUrl({ event, path: '/profileView' })
            })
          }
        },
        {
          label: 'Отмена',
          customClass: 'white-blue',
          onClick: () => {
            this.setProps({
              ...this.props,
              inputs: inputs.view,
              buttons: buttons.view
            })
          }
        }
      ]
    }

    super({
      avatarLink: user?.avatar,
      userName: user?.display_name,
      inputs: inputs.view,
      buttons: buttons.view,
      modalVisibility: false,
      onClickAvatar: () => {
        this.setProps({
          ...this.props,
          modalVisibility: true
        })
      },
      updateAvatar: (event: MouseEvent) => {
        event.preventDefault()

        const avatar = this.refs.form.refs.avatarFile?.value()
        void changeUserAvatar(avatar).then(() => {
          this.setProps({
            ...this.props,
            modalVisibility: false
          })
          changeUrl({ event, path: '/profileView' })
        })
      },
      goBackClick: (event: MouseEvent) => {
        changeUrl({ event, path: '/messenger' })
      }
    })
  }

  protected render(): string {
    return `
        {{{ ProfileBlock ref='form' avatarLink=avatarLink userName=userName goBackClick=goBackClick inputs=inputs buttons=buttons modalVisibility=modalVisibility onClickAvatar=onClickAvatar updateAvatar=updateAvatar }}}
    `
  }
}

export default connect(({ user }) => ({ user }))(ProfileViewPage)
