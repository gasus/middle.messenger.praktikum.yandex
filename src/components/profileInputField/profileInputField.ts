import Block from 'utils/Block'

interface IProps {
  name: string
  label: string
  type: string
  value?: string
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
    <div class="profile-input-inner-wrapper">
      <label for="{{name}}" class="profile-input-label">{{label}}</label>
      {{{ ProfileInput
        name=name
        ref="input"
        onBlur=onBlur
        value=value
        placeholder=label
        disabled=disabled
      }}}
    </div>
    {{{ ValidationError error=error ref="errorLine" rightAlign="true" }}}
    </div>
        `
  }
}
