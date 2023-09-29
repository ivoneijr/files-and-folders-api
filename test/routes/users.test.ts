jest.mock('../../prisma/client', () => ({
  db: {
    user: {
      create: jest.fn(),
      findFirst: jest.fn(),
    },
  },
}))

import { mocked } from 'jest-mock'
import request from 'supertest'

import { db } from '../../prisma/client'
import app from '../../src/app'

const mockedCreate = mocked(db.user.create, { shallow: true })
const mockedFindFirst = mocked(db.user.findFirst, { shallow: true })
const nowISO = new Date().toISOString()

describe('/api/users', () => {
  describe('create', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('should create a user', async () => {
      const requestBody = {
        name: 'hulk',
        email: 'hulk@marvel.com',
        password: '12345678',
      }

      const createdUser = {
        id: 'cln413z8q0000vexk09fm93li',
        ...requestBody,
        createdAt: nowISO,
        updatedAt: nowISO,
      }

      mockedFindFirst.mockResolvedValue(null)
      mockedCreate.mockResolvedValue({
        ...createdUser,
        createdAt: new Date(nowISO),
        updatedAt: new Date(nowISO),
      })

      const response = await request(app).post('/api/users').send(requestBody)

      expect(response.status).toBe(201)
      expect(mockedFindFirst).toHaveBeenCalled()
      expect(mockedCreate).toHaveBeenCalled()
      expect(response.body).toEqual(createdUser)
    })

    describe('should NOT create a user', () => {
      it('with payload schema errors', async () => {
        const response = await request(app)
          .post('/api/users')
          .send({ name: 'Jo', email: 'johnexample.com' })

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toContain(
          'The name should have at least 3 characters'
        )
        expect(response.body.message).toContain(
          'The email should be a valid email'
        )
        expect(response.body.message).toContain('The password is required')
      })

      it('with alread existing email', async () => {
        const requestBody = {
          name: 'hulk',
          email: 'hulk@marvel.com',
          password: '12345678',
        }

        const createdUser = {
          ...requestBody,
          id: 'cln413z8q0000vexk09fm93li',
          createdAt: nowISO,
          updatedAt: nowISO,
        }

        mockedFindFirst.mockResolvedValue({
          ...createdUser,
          createdAt: new Date(nowISO),
          updatedAt: new Date(nowISO),
        })

        const response = await request(app).post('/api/users').send(requestBody)

        expect(response.status).toBe(400)
        expect(mockedFindFirst).toHaveBeenCalled()
        expect(response.body.message).toContain('user already exists')
      })
    })
  })

  describe('list', () => {
    // TODO: add more tests
    expect(true).toBe(true)
  })

  describe('show', () => {
    // TODO: add more tests
    expect(true).toBe(true)
  })

  describe('delete', () => {
    // TODO: add more tests
    expect(true).toBe(true)
  })
})
