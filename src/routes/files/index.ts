import express from 'express'
import controller from '../../controllers/files'
import { authenticated } from '../../middlewares/authenticated'
import { upload } from '../../middlewares/upload'
import { validate } from '../../middlewares/validate'
import { createFileSchema } from './schema'

const router = express.Router()

router.get('/', authenticated, controller.list)
router.post('/', authenticated, validate(createFileSchema), controller.create)
router.get('/:id', authenticated, controller.show)
router.delete('/:id', authenticated, controller.exclude)
router.post('/upload', authenticated, upload.single('file'), controller.upload)

export default router
