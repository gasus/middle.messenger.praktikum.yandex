/* eslint-disable @typescript-eslint/no-unused-expressions */
import { expect } from 'chai'
import sinon from 'sinon'
import Router from '.'
import Block from '../Block'

describe('HTTPTransport', () => {
  const router = new Router('#app')
  class TestComponent extends Block {
    protected render(): string {
      return '<div></div>'
    }
  }

  afterEach(() => {
    sinon.restore()
  })

  it('Должен сработать метод use', () => {
    const routerUseSpy = sinon.spy(router, 'use')

    router.use('testRoute', TestComponent as any)

    expect(routerUseSpy.calledOnce).to.be.eq(true)
  })

  it('Должен сработать метод start', () => {
    const routerOnRouteStub = sinon.stub()
    router._onRoute = routerOnRouteStub

    router.start()

    expect(routerOnRouteStub.calledOnce).to.be.eq(true)
  })

  it('Должен сработать метод go', () => {
    const windowPushStateSpy = sinon.spy(window.history, 'pushState')

    router.go('/testUrl')

    expect(windowPushStateSpy.calledOnce).to.be.eq(true)
    expect(window.location.href).to.eq('http://jsdom/testUrl')
  })

  it('Должен сработать метод back', () => {
    const windowBackSpy = sinon.spy(window.history, 'back')

    router.back()

    expect(windowBackSpy.calledOnce).to.be.eq(true)
  })

  it('Должен сработать метод forward', () => {
    const windowForwardSpy = sinon.spy(window.history, 'forward')

    router.forward()

    expect(windowForwardSpy.calledOnce).to.be.eq(true)
  })

  it('Должен сработать метод getRoute', () => {
    const route = router.getRoute('testRoute')

    expect(route).to.exist
  })
})
