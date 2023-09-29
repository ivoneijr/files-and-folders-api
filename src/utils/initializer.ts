import cors from 'cors'
import express, { Express } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import * as middlewares from '../middlewares'
import api from '../routes'

const useRoutes = (app: Express) => {
  app.get('/', (_req: express.Request, res: express.Response) =>
    res.json({ status: 'up' })
  )

  app.use('/api', api)
}

const useMiddlewares = (app: Express) => {
  app.use('*', middlewares.notFound)
  app.use(middlewares.errorHandler)
}

export const init = (app: Express) => {
  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'))
  }
  app.use(helmet())
  app.use(cors())
  app.use(express.json())

  useRoutes(app)
  useMiddlewares(app)
}
