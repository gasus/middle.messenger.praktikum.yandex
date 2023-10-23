import ErrorComponent from '../ErrorComponent'

export const showError = (response: any, hasError: boolean): void => {
  const res = JSON.parse(response.response)
  if (hasError) {
    window.store.set({ error: res.reason })

    const errorComponent = document.querySelector('#error')
    const error = new ErrorComponent(undefined)
    if (errorComponent) {
      errorComponent.innerHTML = ''
      errorComponent?.append(error?.getContent() as Node)
    }
  }
}
