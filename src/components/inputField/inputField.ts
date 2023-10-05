import Block from 'utils/Block'

interface IProps {
  name: string
  label: string
  type: string
  validate?: () => void
}

export class InputField extends Block {
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
            <div class="input-wrapper">
                {{{ Input
                    ref="input"
                    onBlur=onBlur
                    name=name
                    placeholder=label
                }}}
                <label for=name class="input-label">{{label}}</label>
                {{{ ValidationError error=error ref="errorLine"}}}
            </div>
        `
  }
}
