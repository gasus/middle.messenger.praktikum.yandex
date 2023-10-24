import Block from '../Block'
import { connect } from '../connect'

class ErrorComponent extends Block {
  protected render(): string {
    return `
        {{{ ErrorMsg text=error }}}
    `
  }
}

export default connect(({ error }) => ({ error }))(ErrorComponent)
