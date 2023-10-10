import ErrorComponent from 'utils/ErrorComponent'

export const showError = (response: any): void => {
  const res = JSON.parse(response.response)
  window.store.set({ error: res.reason })

  const errorComponent = document.querySelector('#error')
  const error = new ErrorComponent(undefined)
  if (errorComponent) {
    errorComponent.innerHTML = ''
    errorComponent?.append(error?.getContent() as Node)
  }
  throw Error(response.reason)
}
