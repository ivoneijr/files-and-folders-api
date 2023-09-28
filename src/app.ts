import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import * as middlewares from './middlewares'
import api from './routes'

require('dotenv').config()

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/', (_req: express.Request, res: express.Response) =>
  res.json({ status: 'up' })
)

app.use('/api', api)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

export default app
