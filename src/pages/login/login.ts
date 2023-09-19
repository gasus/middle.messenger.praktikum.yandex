import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'

export class LoginPage extends Block {
  constructor() {
    super({
      inputs: [
        {
          label: 'Логин',
          name: 'login',
          type: 'text',
          validate: (value: string) =>
            value?.length >= 3
              ? ''
              : 'Длина логина должна быть не менее 3х символов'
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
            const form = this.props.inputs.reduce(
              (acc: object, i: { name: string }) => {
                const name = i.name
                const value = name && this.refs[name]?.value()
                return { ...acc, [name]: value }
              },
              {}
            )

            console.log(form)
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
        {{#> EntryForm}}
            {{{ Header label="Вход" }}}
            <div>
              {{#each inputs}}
                {{{ InputField label=this.label ref=this.name name=this.name type=this.type validate=this.validate }}}
              {{/each}}
            </div>
            <div class="login-form-footer">
              {{#each buttons}}
                {{{ Button label=this.label customClass=this.customClass onClick=this.onClick }}}
              {{/each}}
            </div>
        {{/EntryForm}}
    `
  }
}
