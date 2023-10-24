import Block from '../../utils/Block'

interface IProps {
  destination: string
}

export class ButtonThreedots extends Block {
  constructor(props: IProps) {
    super(props)
    this.props.events = {
      click: this.props.onClick || (() => {})
    }
  }

  protected render(): string {
    return `
      <button
        class="button-threedots"
      >
        ⋮
      </button>
    `
  }
}
