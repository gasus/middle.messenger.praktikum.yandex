import Block from 'utils/Block'

export class ValidationError extends Block {
  protected render(): string {
    return `
            <div class="validation-error">{{error}}</div>
        `
  }
}
