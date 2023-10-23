import Block from '../../utils/Block'

export class GoBackBlock extends Block {
  protected render(): string {
    return `
      <div class='go-back-block'>
        {{{ ButtonCircleWithArrow destination='left' onClick=onClick }}}
      </div>
    `
  }
}
