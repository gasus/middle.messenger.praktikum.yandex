import Block from '../../utils/Block'

interface IProps {
  customClass: string
  label: string
  onClick: () => void
}

export class Button extends Block {
  constructor(props: IProps) {
    super(props)
    this.props.events = {
      click: this.props.onClick || (() => {})
    }
  }

  protected render(): string {
    const { customClass, label } = this.props
    return `
        <button class="button button-${customClass}">
            ${label}
        </button>
    `
  }
}
