import Block from 'utils/Block'

export class ProfileBlock extends Block {
  protected render(): string {
    return `
    <div class="profile-wrapper">
      {{{ GoBackBlock onClick=goBackClick }}}
      <div class="profile-info-wrapper">
          <div class="profile-info-content">
            <div class="profile-avatar">
              {{{ Avatar userName=userName }}}
            </div>
            <form class="profile-form">
            {{#each inputs}}
              {{{ ProfileInputField label=this.label ref=this.name name=this.name type=this.type disabled=this.disabled validate=this.validate }}}
            {{/each}}
          </form>
          <div class="profile-info-footer">
            {{#each buttons}}
              {{{ Button label=this.label customClass=this.customClass onClick=this.onClick }}}
            {{/each}}
          </div>
        </div>
       </div>
    </div>
    `
  }
}
