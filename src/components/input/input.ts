import Block from 'utils/Block'

interface IProps {
  onBlur?: () => void
}

export class Input extends Block {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        blur: props.onBlur ?? (() => {})
      }
    })
  }

  protected render(): string {
    return `
            <input
                name="{{name}}"
                class="input"
                ref="input"
                placeholder="label"
            />
        `
  }
}
