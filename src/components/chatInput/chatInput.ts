import Block from '../../utils/Block'

interface IProps {
  onChange?: () => void
}

export class ChatInput extends Block {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        input: props.onChange ?? (() => {})
      }
    })
  }

  protected render(): string {
    return `
            <input
                class="chat-input"
                name='message'
                placeholder='Сообщение'
            />
        `
  }
}
