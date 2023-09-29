import { NextFunction, Request, Response } from 'express'
import CustomError from '../utils/CustomError'

export function notFound(_req: Request, res: Response) {
  res.status(404)
  res.send()
}

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    if (err instanceof CustomError) {
      res.status(err.code)
      res.send({ message: err.message })
    } else {
      res.status(500)
      res.send({ message: 'Internal Server Error', stack: err.stack })
    }
  } else {
    next()
  }
}
