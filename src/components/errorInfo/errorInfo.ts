import Block from '../../utils/Block'

export class ErrorInfo extends Block {
  protected render(): string {
    return `
    <div class="error-info-wrapper">
        <div class="error-info-number">{{errorNumber}}</div>
        <div class="error-info-description">
            {{errorText}}
        </div>
        {{{ Button customClass="white-blue" label='Назад к чатам' onClick=returnPage }}}
    </div>
        `
  }
}
