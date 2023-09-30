import { db } from '../../../prisma/client'

interface GetFolderAndUserParams {
  folderId: string
  createdById: string
}

export const getFolderAndUser = async ({
  folderId,
  createdById,
}: GetFolderAndUserParams) => {
  const folder = await db.folder.findFirst({
    where: {
      id: folderId,
    },
  })

  const user = await db.user.findFirst({
    where: {
      id: createdById,
    },
  })

  return { folder, user }
}

export const extractPath = async (originalName: string, email: string) => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const timestamp = date.getTime()

  const fileName = `${timestamp}_${originalName}`
  const filePath = `${year}/${month}/${day}/${email}/${fileName}`

  return { fileName, filePath }
}
