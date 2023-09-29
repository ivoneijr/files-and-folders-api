import express from 'express'
import { init } from './utils/initializer'

require('dotenv').config()

const app = express()
init(app)

export default app
