import Block from 'utils/Block'

export class Avatar extends Block {
  constructor(props: object) {
    super(props)
    this.props.events = {
      click: this.props.onClick || (() => {})
    }
  }

  protected render(): string {
    return `
      <div
      {{#if smallRightUsername}}
          class='avatar-wrapper avatar-wrapper-small-right-username'
        {{else}}
          class='avatar-wrapper'
        {{/if}}
      >
        <img class='avatar-img' src={{avatarLink}} />
        {{#if userName}}
          <div class='avatar-name'>
            {{userName}}
          </div>
        {{/if}}
      </div>
    `
  }
}
