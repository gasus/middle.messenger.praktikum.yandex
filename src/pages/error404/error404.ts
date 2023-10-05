import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'

export class Error404Page extends Block {
  constructor() {
    super({
      toLogin: (event: MouseEvent) => {
        event.preventDefault()
        changeUrl(event, '')
      }
    })
  }

  protected render(): string {
    return `
      {{{ ErrorInfo errorNumber='404' errorText='Запрашиваемой страницы не существует, как и смысла в жизни' returnPage=toLogin }}}
    `
  }
}
