import { db } from '../../../prisma/client'
import { CreateFolderPayload } from '../../routes/folders/schema'
import CustomError from '../../utils/CustomError'

const list = async () => {
  const folders = await db.folder.findMany()

  return folders
}

const show = async (id: string) => {
  const folder = await db.folder.findFirst({
    where: {
      id,
    },
    include: {
      files: true,
      childrens: true,
      parent: true,
    },
  })

  if (!folder) {
    throw new CustomError(404, 'folder not found')
  }

  return folder
}

const create = async (data: CreateFolderPayload) => {
  const folder = await db.folder.create({
    data,
  })

  return folder
}

const exclude = async (id: string) => {
  const folder = await db.folder.findFirst({
    where: {
      id,
    },
  })

  if (!folder) {
    return
  }

  await db.folder.delete({
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
