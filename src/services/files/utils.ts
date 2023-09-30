import { db } from '../../../prisma/client'

export const userAndFolderExists = async (
  createdById: string,
  folderId: string
) => {
  const user = await db.user.findFirst({
    where: {
      id: createdById,
    },
  })

  const folder = await db.folder.findFirst({
    where: {
      id: folderId,
    },
  })

  return user && folder
}
