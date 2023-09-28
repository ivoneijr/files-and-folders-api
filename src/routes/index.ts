import express from 'express'

import files from './files'
import folders from './folders'

const router = express.Router()

router.use('/folders', folders)
router.use('/files', files)

export default router
