import express from 'express'

import { authenticated } from '../middlewares/authenticated'
import login from './auth/login'
import files from './files'
import folders from './folders'
import users from './users'

const router = express.Router()

router.use('/auth/login', login)
router.use('/users', users)

router.use('/folders', authenticated, folders)
router.use('/files', authenticated, files)

export default router
