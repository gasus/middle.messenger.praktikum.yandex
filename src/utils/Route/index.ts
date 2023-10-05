import { type PageTypes } from 'types/PageTypes'
import type Block from 'utils/Block'

interface RouteProps {
  rootQuery: string
}

export default class Route {
  public _pathname: string
  public _blockClass: PageTypes
  public _block: null | Block
  public _props: RouteProps = { rootQuery: '/' }

  constructor(pathname: string, view: PageTypes, props: RouteProps) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this._props = props
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave(): void {
    if (this._block) {
      this._block.hide()
    }
  }

  match(pathname: string): boolean {
    return pathname === this._pathname
  }

  render(): void {
    this._block = new this._blockClass()
    const root = document.querySelector(this._props.rootQuery)
    if (root) {
      root.innerHTML = ''
      root?.append(this._block.getContent() as Node)
    }
  }
}
