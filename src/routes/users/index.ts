import express from 'express'

import controller from '../../controllers/users'
import { authenticated } from '../../middlewares/authenticated'
import { validate } from '../../middlewares/validate'
import { createUserSchema } from './schema'

const router = express.Router()

router.post('/', validate(createUserSchema), controller.create)
router.get('/', authenticated, controller.list)
router.get('/:id', authenticated, controller.show)
router.delete('/:id', authenticated, controller.exclude)

export default router
