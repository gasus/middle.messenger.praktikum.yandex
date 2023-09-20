const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

interface RequestOption {
  method: string
  data?: any // TODO: Не удалось типизировать
  headers?: Record<string, string>
  timeout?: number
}

const queryStringify = (data: Record<string, string | object>): string => {
  const params = []

  for (const key in data) {
    const value = data[key]

    if (typeof value === 'object') {
      params.push(`${encodeURIComponent(key)}=${JSON.stringify(value)}`)
    } else {
      params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    }
  }

  return params.join('&')
}

export class HTTPTransport {
  get = async (
    url: string,
    options: RequestOption
  ): Promise<XMLHttpRequest> => {
    return await this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    )
  }

  post = async (
    url: string,
    options: RequestOption
  ): Promise<XMLHttpRequest> => {
    return await this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    )
  }

  put = async (
    url: string,
    options: RequestOption
  ): Promise<XMLHttpRequest> => {
    return await this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    )
  }

  delete = async (
    url: string,
    options: RequestOption
  ): Promise<XMLHttpRequest> => {
    return await this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    )
  }

  request = async (
    url: string,
    options: RequestOption,
    timeout: number = 5000
  ): Promise<XMLHttpRequest> => {
    const { method, data, headers } = options

    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()

      const isGet = method === METHODS.GET
      xhr.open(method, isGet && !!data ? `${url}?${queryStringify(data)}` : url)

      for (const key in headers) {
        xhr.setRequestHeader(key, data[key])
      }

      xhr.onload = function () {
        resolve(xhr)
      }

      xhr.timeout = timeout
      xhr.onabort = reject
      xhr.onerror = reject
      xhr.ontimeout = reject

      if (method === METHODS.GET) {
        xhr.send()
      } else if (method === METHODS.POST) {
        data ? xhr.send(data) : xhr.send()
      } else if (method === METHODS.PUT) {
        data ? xhr.send(data) : xhr.send()
      } else if (method === METHODS.DELETE) {
        xhr.send()
      }
    })
  }
}
