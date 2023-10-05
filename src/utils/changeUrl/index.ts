import { type PageUrls } from 'types/PageTypes'

interface Props {
  event?: MouseEvent
  path: PageUrls
}

export const changeUrl = ({ event, path }: Props): void => {
  event?.preventDefault()
  window.location.pathname = `/${path}`
}
