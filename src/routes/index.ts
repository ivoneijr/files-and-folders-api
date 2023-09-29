import express from 'express'

import files from './files'
import folders from './folders'
import users from './users'

const router = express.Router()

router.use('/users', users)
router.use('/folders', folders)
router.use('/files', files)

export default router
