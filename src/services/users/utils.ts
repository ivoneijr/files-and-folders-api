import { db } from '../../../prisma/client'

export const DEFAULT_FIELDS = {
  id: true,
  name: true,
  email: true,
  createdAt: true,
  updatedAt: true,
}

export const verifyExistingUser = async (email: string) => {
  const user = await db.user.findFirst({
    where: {
      email,
    },
  })

  return user
}
