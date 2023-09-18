import { type PageTypes } from 'types/PageTypes'

export const changeUrl = (path: PageTypes): void => {
  window.location.href = `?page=${path}`
}
