import { expect } from 'chai'
import Block from '.'

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
})
