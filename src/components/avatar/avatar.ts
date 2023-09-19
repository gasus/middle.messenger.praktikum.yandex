import Block from 'utils/Block'

export class Avatar extends Block {
  protected render(): string {
    return `
      <div class='avatar-wrapper'>
        <div class='avatar-img'>
        </div>
        <div class='avatar-name'>
          {{userName}}
        </div>
      </div>
    `
  }
}
