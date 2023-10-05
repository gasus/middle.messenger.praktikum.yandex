import type * as Pages from 'pages/index'

export type PageTypes = (typeof Pages)[keyof typeof Pages]

export type PageUrls =
  | 'login'
  | 'registration'
  | 'error404'
  | 'error500'
  | 'profileView'
  | 'profileEditInfo'
  | 'profileEditPassword'
  | 'chat'
