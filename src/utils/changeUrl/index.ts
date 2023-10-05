import { type PageUrls } from 'types/PageTypes'

export const changeUrl = (event: MouseEvent, path: PageUrls): void => {
  event.preventDefault()
  window.location.href = `?page=${path}`
}
