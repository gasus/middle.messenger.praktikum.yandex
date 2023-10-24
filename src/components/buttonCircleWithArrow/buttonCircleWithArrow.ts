import Block from '../../utils/Block'

interface IProps {
  destination: string
}

export class ButtonCircleWithArrow extends Block {
  constructor(props: IProps) {
    super(props)
    this.props.events = {
      click: this.props.onClick || (() => {})
    }
  }

  protected render(): string {
    const { destination } = this.props
    return `
      <button
        class="button-circle-arrow button-circle-arrow-${destination}"
        {{#if disabled}}
          disabled='true'
        {{/if}}
      >
        ➔
      </button>
    `
  }
}
