import express from 'express'
import users from '../../controllers/users'
import { validate } from '../../middlewares/validate'
import { createUserSchema } from './schema'

const router = express.Router()

router.get('/', users.list)
router.post('/', validate(createUserSchema), users.create)
router.get('/:id', users.show)
router.delete('/:id', users.exclude)

export default router
