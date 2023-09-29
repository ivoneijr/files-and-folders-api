import express from 'express'
import { init } from './utils/initializer'

require('dotenv').config()
require('checkenv').check()

const app = express()
init(app)

export default app
