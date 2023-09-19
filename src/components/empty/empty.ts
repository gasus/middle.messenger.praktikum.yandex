import Block from 'utils/Block'

export class Empty extends Block {
  protected render(): string {
    return `
    <div class="empty-block">
      {{#if text}}
        {{text}}
      {{else}}
        Пусто
      {{/if}}
    </div>
    `
  }
}
