import Handlebars, { type HelperOptions } from 'handlebars'
import type Block from '../Block'

export function registerComponent(name: string, Component: typeof Block): void {
  Handlebars.registerHelper(
    name,
    function (this: unknown, { hash, data, fn }: HelperOptions) {
      const component = new Component(hash)
      const dataAttribute = `data-id="${component.id}"`

      if (hash.ref) {
        data.root.__refs = data.root.__refs || {}
        data.root.__refs[hash.ref] = component
      }

      data.root.__children = data.root.__children || []
      data.root.__children.push({
        component,
        embed(fragment: DocumentFragment) {
          const stub = fragment.querySelector(`[${dataAttribute}]`)

          if (!stub) {
            return
          }

          component.getContent()?.append(...Array.from(stub.childNodes))

          stub.replaceWith(component.getContent() as Node)
        }
      })

      const contents = fn ? fn(this) : ''

      return `<div ${dataAttribute}>${contents}</div>`
    }
  )
}
