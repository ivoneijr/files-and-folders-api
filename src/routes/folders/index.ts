import express from 'express'
import controller from '../../controllers/folders'
import { authenticated } from '../../middlewares/authenticated'
import { validate } from '../../middlewares/validate'
import { createFolderSchema } from './schema'

const router = express.Router()

router.get('/', authenticated, controller.list)
router.post('/', authenticated, validate(createFolderSchema), controller.create)
router.get('/:id', authenticated, controller.show)
router.delete('/:id', authenticated, controller.exclude)

export default router
