import Block from 'utils/Block'

export class Header extends Block {
  protected render(): string {
    return `
        <div class="header">
            {{label}}
        </div>
    `
  }
}
