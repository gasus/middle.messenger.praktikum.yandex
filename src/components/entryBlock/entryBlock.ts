import Block from 'utils/Block'

export class EntryBlock extends Block {
  protected render(): string {
    return `
      <form class="entry-wrapper">
        {{{ Header title=title }}}
        <div>
          {{#each inputs}}
            {{{ InputField label=this.label ref=this.name name=this.name type=this.type validate=this.validate }}}
          {{/each}}
        </div>
        <div class="login-form-footer">
          {{#each buttons}}
            {{{ Button label=this.label customClass=this.customClass onClick=this.onClick }}}
          {{/each}}
        </div>
      </form>
    `
  }
}
