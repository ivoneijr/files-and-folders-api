import express from 'express'
import { init } from './utils/initializer'

require('dotenv').config()
if (process.env.NODE_ENV === 'development') {
  require('checkenv').check()
}

const app = express()
init(app)

export default app
