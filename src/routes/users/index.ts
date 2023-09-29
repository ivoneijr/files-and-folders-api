import express from 'express'
import users from '../../controllers/users'
import { authenticated } from '../../middlewares/authenticated'
import { validate } from '../../middlewares/validate'
import { createUserSchema } from './schema'
const router = express.Router()

router.post('/', validate(createUserSchema), users.create)

router.get('/', authenticated, users.list)
router.get('/:id', authenticated, users.show)
router.delete('/:id', authenticated, users.exclude)

export default router
