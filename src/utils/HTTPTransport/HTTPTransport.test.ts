import { expect } from 'chai'
import sinon from 'sinon'
import { HTTPTransport } from '.'

describe('HTTPTransport', () => {
  afterEach(() => {
    sinon.restore()
  })

  it('Должен сработать метод get', async () => {
    const http = new HTTPTransport('/test')
    const requestStub = sinon.stub(http, 'request').resolves()

    await http.get('/testPath', { data: { info: 'info' } })

    expect(
      requestStub.calledWithMatch(
        'https://ya-praktikum.tech/api/v2/test/testPath',
        { method: 'GET' }
      )
    ).to.be.eq(true)
  })

  it('Должен сработать метод post', async () => {
    const http = new HTTPTransport('/test')
    const requestStub = sinon.stub(http, 'request').resolves()

    await http.post('/testPath', { data: { info: 'info' } })

    expect(
      requestStub.calledWithMatch(
        'https://ya-praktikum.tech/api/v2/test/testPath',
        { method: 'POST' }
      )
    ).to.be.eq(true)
  })

  it('Должен сработать метод put', async () => {
    const http = new HTTPTransport('/test')
    const requestStub = sinon.stub(http, 'request').resolves()

    await http.put('/testPath', { data: { info: 'info' } })

    expect(
      requestStub.calledWithMatch(
        'https://ya-praktikum.tech/api/v2/test/testPath',
        { method: 'PUT' }
      )
    ).to.be.eq(true)
  })

  it('Должен сработать метод delete', async () => {
    const http = new HTTPTransport('/test')
    const requestStub = sinon.stub(http, 'request').resolves()

    await http.delete('/testPath', { data: { info: 'info' } })

    expect(
      requestStub.calledWithMatch(
        'https://ya-praktikum.tech/api/v2/test/testPath',
        { method: 'DELETE' }
      )
    ).to.be.eq(true)
  })
})
