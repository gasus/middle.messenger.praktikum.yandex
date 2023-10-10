import type * as Pages from 'pages/index'

export type PageTypes = (typeof Pages)[keyof typeof Pages]

export type PageUrls =
  | ''
  | 'sign-up'
  | 'error404'
  | 'error500'
  | 'profileView'
  | 'messenger'
