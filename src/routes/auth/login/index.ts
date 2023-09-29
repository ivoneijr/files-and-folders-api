import express from 'express'

import auth from '../../../controllers/auth/login'
import { validate } from '../../../middlewares/validate'
import { loginSchema } from './schema'

const router = express.Router()

router.post('/', validate(loginSchema), auth.login)

export default router
