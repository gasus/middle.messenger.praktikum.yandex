import { type PageTypes } from 'types/PageTypes'

export const changeUrl = (event: MouseEvent, path: PageTypes): void => {
  event.preventDefault()
  window.location.href = `?page=${path}`
}
