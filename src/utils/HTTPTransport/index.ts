const HOST_URL = 'https://ya-praktikum.tech/api/v2'

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

type HTTPMethod = (
  url: string,
  options?: Omit<RequestOption, 'method'>
) => Promise<XMLHttpRequest>

type HTTPRequest = (
  url: string,
  options: RequestOption
) => Promise<XMLHttpRequest>

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
  private readonly apiUrl: string = ''

  constructor(apiPath: string) {
    this.apiUrl = `${HOST_URL}${apiPath}`
  }

  get: HTTPMethod = async (url, options) => {
    return await this.request(`${this.apiUrl}${url}`, {
      ...options,
      method: METHODS.GET
    })
  }

  post: HTTPMethod = async (url, options) => {
    return await this.request(`${this.apiUrl}${url}`, {
      ...options,
      method: METHODS.POST
    })
  }

  put: HTTPMethod = async (url, options) => {
    return await this.request(`${this.apiUrl}${url}`, {
      ...options,
      method: METHODS.PUT
    })
  }

  delete: HTTPMethod = async (url, options) => {
    return await this.request(`${this.apiUrl}${url}`, {
      ...options,
      method: METHODS.DELETE
    })
  }

  private readonly request: HTTPRequest = async (url, options) => {
    const { method, data, headers, timeout = 5000 } = options

    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()

      const isGet = method === METHODS.GET
      xhr.open(method, isGet && !!data ? `${url}?${queryStringify(data)}` : url)

      xhr.setRequestHeader('Content-Type', 'application/json')
      for (const key in headers) {
        xhr.setRequestHeader(key, data[key])
      }

      xhr.onload = function () {
        resolve(xhr)
      }

      xhr.withCredentials = true
      xhr.timeout = timeout
      xhr.onabort = reject
      xhr.onerror = reject
      xhr.ontimeout = reject

      if (method === METHODS.GET) {
        xhr.send()
      } else if (method === METHODS.POST) {
        data ? xhr.send(JSON.stringify(data)) : xhr.send()
      } else if (method === METHODS.PUT) {
        data ? xhr.send(JSON.stringify(data)) : xhr.send()
      } else if (method === METHODS.DELETE) {
        xhr.send()
      }
    })
  }
}
