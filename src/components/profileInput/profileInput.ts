import Block from 'utils/Block'

interface IProps {
  onBlur?: () => void
}

export class ProfileInput extends Block {
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
                class="profile-input"
                ref="input"
                value="{{value}}"
                {{#if disabled}}
                  disabled="{{disabled}}"
                {{/if}}
            />
        `
  }
}
