import Block from 'utils/Block'

export class InputError extends Block {
  protected render(): string {
    return `
            <div class="input-error">{{error}}</div>
        `
  }
}
