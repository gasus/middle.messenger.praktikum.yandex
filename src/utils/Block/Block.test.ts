import { expect } from 'chai'
import Block from '.'
import sinon from 'sinon'

interface Props {
  text?: string
  events: Record<string, () => void>
}

describe('Block', () => {
  let PageClass: typeof Block

  before(() => {
    class Page extends Block {
      constructor(props: Props) {
        super({ ...props })
      }

      protected render(): string {
        return `
            <div>
                <span id="test-text">{{text}}</span>
                <button>{{text-button}}</button>
            </div>
        `
      }
    }

    PageClass = Page
  })

  it('Должен создать компонент с передаными пропсами', () => {
    const text = 'Hello'
    const pageComponent = new PageClass({ text })

    const spanElement =
      pageComponent.element?.querySelector('#test-text')?.innerHTML

    expect(spanElement).to.be.eq(text)
  })

  it('Должен иметь реактивное поведение', () => {
    const text = 'Hello'
    const newText = 'New text'
    const pageComponent = new PageClass({ text })

    let spanElement =
      pageComponent.element?.querySelector('#test-text')?.innerHTML
    pageComponent.setProps({ text: newText })
    spanElement = pageComponent.element?.querySelector('#test-text')?.innerHTML

    expect(spanElement).to.be.eq(newText)
  })

  it('Должен установить события на элемент', () => {
    const handler = sinon.stub()
    const pageComponent = new PageClass({ events: { click: handler } })

    expect(handler.calledOnce).to.be.eq(false)

    const event = new MouseEvent('click')
    pageComponent.element?.dispatchEvent(event)

    expect(handler.calledOnce).to.be.eq(true)
  })
})
