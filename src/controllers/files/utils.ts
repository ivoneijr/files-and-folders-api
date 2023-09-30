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
