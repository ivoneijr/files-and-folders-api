import request from 'supertest'

import app from '../src/app'

describe('app', () => {
  describe('NOT FOUNT', () => {
    it('should return 404 for unexisting routes', (done) => {
      const UNEXISTING_ROUTE = '/xablau'

      request(app).get(UNEXISTING_ROUTE).expect(404, done)
    })
  })

  describe('healthcheck', () => {
    it('should return success message', (done) => {
      request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err)
          }

          const { body, status } = res

          expect(status).toBe(200)
          expect(body).toMatchObject({ status: 'up' })

          return done()
        })
    })
  })
})
