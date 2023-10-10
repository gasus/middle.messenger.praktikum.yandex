import Block from 'utils/Block'
import { connect } from 'utils/connect'

class ErrorComponent extends Block {
  protected render(): string {
    return `
        {{{ ErrorMsg text=error }}}
    `
  }
}

export default connect(({ error }) => ({ error }))(ErrorComponent)
