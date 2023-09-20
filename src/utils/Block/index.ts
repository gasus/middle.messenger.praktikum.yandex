import EventBus from 'utils/EventBus'
import { nanoid } from 'nanoid'
import Handlebars from 'handlebars'

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  }

  public id = nanoid(6)
  public props: any
  public refs: Record<string, Block> = {}
  public children: Record<string, Block>
  private readonly eventBus: () => EventBus
  private _element: HTMLElement | null = null
  public _meta: { props: any }

  constructor(propsWithChildren: any = {}) {
    const eventBus = new EventBus()

    const { props, children } = this._getChildrenAndProps(propsWithChildren)

    this._meta = {
      props
    }

    this.children = children
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    this.props = this._makePropsProxy(props)

    this.eventBus = () => eventBus

    this._registerEvents(eventBus)

    eventBus.emit(Block.EVENTS.INIT)
  }

  _getChildrenAndProps(childrenAndProps: any): {
    props: Record<string, any>
    children: Record<string, Block>
  } {
    const props: Record<string, any> = {}
    const children: Record<string, Block> = {}

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value
      } else {
        props[key] = value
      }
    })

    return { props, children }
  }

  _addEvents(): void {
    const { events = {} } = this.props as { events: Record<string, () => void> }

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName])
    })
  }

  _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  private _init(): void {
    this.init()

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  protected init(): void {}

  private _componentDidMount(): void {
    this.componentDidMount()
  }

  componentDidMount(): void {}

  public dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)

    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount()
    })
  }

  private _componentDidUpdate(oldProps: any, newProps: any): void {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  protected componentDidUpdate(oldProps: any, newProps: any): boolean {
    const isEqual = oldProps === newProps
    return true ?? isEqual // TODO
  }

  setProps = (nextProps: any): void => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  get element(): HTMLElement | null {
    return this._element
  }

  private _render(): void {
    const fragment = this.compile(this.render(), this.props)

    const newElement = fragment.firstElementChild as HTMLElement

    if (this._element) {
      this._element.replaceWith(newElement)
    }

    this._element = newElement

    this._addEvents()
  }

  protected render(): string {
    return ''
  }

  private compile(template: string, context: any): DocumentFragment {
    const contextAndStubs = { ...context, __refs: this.refs }

    const html = Handlebars.compile(template)(contextAndStubs)

    const temp = document.createElement('template')

    temp.innerHTML = html

    contextAndStubs.__children?.forEach(({ embed }: any) => {
      embed(temp.content)
    })

    return temp.content
  }

  getContent(): HTMLElement | null {
    return this.element
  }

  value(): any {}

  private _makePropsProxy(props: any): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set(target, prop, value) {
        const oldTarget = { ...target }

        target[prop] = value

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target)
        return true
      },
      deleteProperty() {
        throw new Error('Нет доступа')
      }
    })
  }

  show(): void {
    const content = this.getContent()
    if (content) content.style.display = 'block'
  }

  hide(): void {
    const content = this.getContent()
    if (content) content.style.display = 'none'
  }
}

export default Block
