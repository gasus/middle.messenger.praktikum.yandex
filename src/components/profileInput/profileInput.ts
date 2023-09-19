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
                class="profile-input"
                ref="input"
                {{#if disabled}}
                  disabled="{{disabled}}"
                {{/if}}
            />
        `
  }
}