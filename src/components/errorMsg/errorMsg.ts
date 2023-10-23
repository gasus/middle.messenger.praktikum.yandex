import Block from '../../utils/Block'

export class ErrorMsg extends Block {
  protected render(): string {
    return `
      {{#if text}}
        <div class="error-message">
          Возникла ошибка: {{text}}
        </div>
      {{/if}}
    `
  }
}
