import Block from '../../utils/Block'

export class ValidationError extends Block {
  protected render(): string {
    return `
            <div 
            {{#if rightAlign}}
            class="validation-error validation-error-right"
            {{else}}
            class="validation-error"
          {{/if}}
          >{{error}}</div>
        `
  }
}
