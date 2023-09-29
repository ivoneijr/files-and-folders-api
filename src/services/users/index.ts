import { hash } from 'bcryptjs'
import { db } from '../../../prisma/client'
import { CreateUserPayload } from '../../routes/users/schema'
import CustomError from '../../utils/CustomError'
import { DEFAULT_FIELDS, verifyExistingUser } from './utils'

const list = async () => {
  const users = await db.user.findMany({
    select: DEFAULT_FIELDS,
  })

  return users
}

const show = async (id: string) => {
  const user = await db.user.findFirst({
    where: {
      id,
    },
    select: DEFAULT_FIELDS,
  })

  if (!user) {
    throw new CustomError(404, 'user not found')
  }

  return user
}

const create = async (data: CreateUserPayload) => {
  const exists = await verifyExistingUser(data.email)
  if (exists) {
    throw new CustomError(400, 'user already exists')
  }

  const user = await db.user.create({
    data: {
      ...data,
      password: await hash(data.password, 8),
    },
    select: DEFAULT_FIELDS,
  })

  return user
}

const exclude = async (id: string) => {
  const user = await db.user.findFirst({
    where: {
      id,
    },
  })

  if (!user) {
    return
  }

  await db.user.delete({
    where: {
      id,
    },
  })

  return
}

export default {
  list,
  show,
  create,
  exclude,
}
