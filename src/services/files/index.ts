import { db } from '../../../prisma/client'
import { CreateFilePayload } from '../../routes/files/schema'
import CustomError from '../../utils/CustomError'
import { userAndFolderExists } from './utils'

const list = async () => {
  const files = await db.file.findMany()

  return files
}

const show = async (id: string) => {
  const file = await db.file.findFirst({
    where: {
      id,
    },
  })

  if (!file) {
    throw new CustomError(404, 'file not found')
  }

  return file
}

const create = async (data: CreateFilePayload) => {
  const idsExists = await userAndFolderExists(data.createdById, data.folderId)
  if (!idsExists) {
    throw new CustomError(400, 'Invalid userId or folderId')
  }

  const file = await db.file.create({
    data,
  })

  return file
}

const exclude = async (id: string) => {
  const file = await db.file.findFirst({
    where: {
      id,
    },
  })

  if (!file) {
    return
  }

  await db.file.delete({
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
