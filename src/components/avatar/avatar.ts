import Block from 'utils/Block'

export class Avatar extends Block {
  protected render(): string {
    return `
      <div
      {{#if smallRightUsername}}
      class='avatar-wrapper avatar-wrapper-small-right-username'
        {{else}}
        class='avatar-wrapper'
        {{/if}}
      >
        <div class='avatar-img'>
        </div>
        {{#if userName}}
          <div class='avatar-name'>
            {{userName}}
          </div>
        {{/if}}
      </div>
    `
  }
}
