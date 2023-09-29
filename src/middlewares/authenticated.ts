import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import CustomError from '../utils/CustomError'

export const authenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const header = req.headers.authorization
    if (!header) {
      next(new CustomError(401, 'Unauthorized'))
    }

    const [_type, token] = header?.split(' ') || []

    verify(token, process.env.JWT_SECRET!)

    return next()
  } catch (error) {
    next(new CustomError(401, 'Unauthorized'))
  }
}
