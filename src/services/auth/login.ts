import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { LoginPayload } from '../../routes/auth/login/schema'
import CustomError from '../../utils/CustomError'
import { verifyExistingUser } from '../users/utils'

const login = async (data: LoginPayload) => {
  const user = await verifyExistingUser(data.email)
  if (!user) {
    throw new CustomError(401, 'Invalid username or password')
  }

  const match = await compare(data.password, user.password)
  if (!match) {
    throw new CustomError(401, 'Invalid username or password')
  }

  const token = sign({ id: user.id }, process.env.JWT_SECRET!, {
    subject: user.id,
    expiresIn: '20s',
  })

  return { token }
}

export default {
  login,
}
