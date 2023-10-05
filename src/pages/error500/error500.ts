import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'

export class Error500Page extends Block {
  constructor() {
    super({
      toLogin: (event: MouseEvent) => {
        event.preventDefault()
        changeUrl({ event, path: '' })
      }
    })
  }

  protected render(): string {
    return `
      {{{ ErrorInfo errorNumber='500' errorText='Ошибка, всякое могло произойти' returnPage=toLogin }}}
    `
  }
}
