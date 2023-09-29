import { NextFunction, Request, Response } from 'express'
import { ZodError, ZodType } from 'zod'

import CustomError from '../utils/CustomError'

export const check = async <T>(body: any, schema: ZodType<T, any, any>) => {
  try {
    return schema.parse(body)
  } catch (error) {
    throw error
  }
}

export const validate = <T>(schema: ZodType<T, any, any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = await check(req.body, schema)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        next(
          new CustomError(
            400,
            error.issues.map((issue) => issue.message).join(', ')
          )
        )
      } else {
        next(new CustomError(500, 'Internal Validatin error'))
      }
    }
  }
}
