'use strict'

const mock = require('egg-mock')

describe('test/sms.test.js', () => {
  let app
  before(() => {
    app = mock.app({
      baseDir: 'apps/sms'
    })
    return app.ready()
  })

  after(() => app.close())
  afterEach(mock.restore)

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, sms')
      .expect(200)
  })
})
