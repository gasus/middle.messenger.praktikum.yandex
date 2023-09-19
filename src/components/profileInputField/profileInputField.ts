import Block from 'utils/Block'

interface IProps {
  name: string
  label: string
  type: string
  hasValue: boolean
  validate?: () => void
}

export class ProfileInputField extends Block {
  constructor(props: IProps) {
    super({
      ...props,
      onBlur: () => this.validate()
    })
  }

  public value(): boolean | string {
    if (!this.validate()) {
      return false
    }
    return (this?.refs?.input?.element as HTMLInputElement)?.value
  }

  private validate(): boolean {
    const value = (this?.refs?.input?.element as HTMLInputElement)?.value
    const error = this.props.validate?.(value)

    this.refs.errorLine.setProps({ error: error ?? undefined })
    return !error
  }

  protected render(): string {
    return `
    <div class="profile-input-wrapper">
      <label for="{{name}}" class="profile-input-label">{{label}}</label>
      {{{ ProfileInput
        ref="input"
        onBlur=onBlur
        placeholder=label
        disabled=disabled
      }}}
      {{{ ValidationError error=error ref="errorLine"}}}
    </div>
        `
  }
}
