import { type Message } from '../../types/Chats'
import { HOST_WSS_CHATS } from '../constants'

export default class ChatWebSocket {
  public socket: WebSocket | null

  constructor(
    userId: number | undefined,
    chatId: number | null,
    chatToken: string | null
  ) {
    this.socket = new WebSocket(
      `${HOST_WSS_CHATS}${userId}/${chatId}/${chatToken}`
    )
  }

  create(): void {
    this.socket?.addEventListener('open', () => {
      this.socket?.send(
        JSON.stringify({
          content: '0',
          type: 'get old'
        })
      )
    })

    this.socket?.addEventListener('message', (event) => {
      try {
        const userId = window.store.getState().user?.id
        const raw = JSON.parse(event.data)

        if (Array.isArray(raw)) {
          const messages = raw
            .map((i: Message) => ({
              ...i,
              time: new Date(i?.time)?.toLocaleString?.(),
              isUser: i.user_id === userId
            }))
            .reverse()
          window.store.set({ messages })
        } else {
          const oldMessages = window.store.getState().messages
          const newMessage = {
            ...raw,
            time: new Date(raw?.time)?.toLocaleString?.(),
            isUser: raw.user_id === userId
          }
          window.store.set({ messages: [...oldMessages, newMessage] })
        }
      } catch (err) {
        throw Error(err as string)
      }
    })

    this.socket?.addEventListener('error', (event) => {
      console.log('Ошибка', event)
    })
  }

  send(text: string): void {
    this.socket?.send(
      JSON.stringify({
        content: text,
        type: 'message'
      })
    )
  }

  close(): void {
    this.socket?.close()
  }
}
